import { useEffect, useRef, useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState(""); // 사용자로 부터 입력받는 todo를 저장하기 위한 state

  const idRef = useRef(0);

  const onCangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // 입력하면 실시간으로 text에 저장
  };

  const onClickAdd = () => {
    setTodos([
      ...todos,
      {
        id: idRef.current++, // idRef.현재값에 ++
        content: text,
      },
    ]); // 추가가 완료가 되면
    setText(""); // setText 값을 초기화
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]); // todos state가 바뀔 때 마다 useEffect 내부를 수행

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        value={text} // 입력 받은 text
        onChange={onCangeInput}
      />
      <button onClick={onClickAdd}>추가</button>
    </div>
  );
}

export default App;
