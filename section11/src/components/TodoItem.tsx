import React from "react";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";

// extends 사용해서 기존 Todo에 확장
interface Props extends Todo {}

const TodoItem = (props: Props) => {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
