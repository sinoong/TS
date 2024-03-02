import React, { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {}

// props의 타입을 정의 해야함
const Editor = (props: Props) => {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState(""); // 사용자로 부터 입력받는 todo를 저장하기 위한 state

  // event 객체의 타입
  const onCangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // 수정시 입력하면 실시간으로 text에 저장
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text); // props 받은 onClickAdd 실행
    setText("");
  };

  return (
    <div>
      <input
        value={text} // 입력 받은 text
        onChange={onCangeInput}
      />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
};

export default Editor;
