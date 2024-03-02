import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./types"; // 설정 해 놓은 타입 불러오기
import TodoItem from "./components/TodoItem";

// 서로소 유니온 타입
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

// useState 보다 복잡한 상태 로직을 관리할 때 사용
function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다");
  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++, // idRef.현재값에 ++
        content: text,
      },
    });
    // setTodos([
    //   ...todos, // 원본 값 추가
    //   {
    //     id: idRef.current++, // idRef.현재값에 ++
    //     content: text,
    //   },
    // ]); // 추가가 완료가 되면
    // // setText(""); // setText 값을 초기화
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]); // todos state가 바뀔 때 마다 useEffect 내부를 수행

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });

    // `filter` 함수는 각 `todo` 항목을 순회하며, 현재 항목의 `id`가 전달된 `id`와 다를 경우에만 새 배열에 포함
    // 따라서, `id`가 일치하는 `todo`는 새 배열에서 제외되어, 결과적으로 삭제 처리됩니다.
    // setTodos(todos.filter((todo) => todo.id != id)); // 즉 내가 클릭한건 빼고 나머지는 담아둔다
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          {/* onClickAdd 함수를 props로 전달 */}
          {/* 타입의 형식을 Editor에 props 정의 해줘야함  */}
          <Editor></Editor>
          <div>
            {/* todos를 todo 하나의 값을 리스트 형식으로 랜더링(map) */}
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} /> // todo들 전달
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
