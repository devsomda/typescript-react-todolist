import { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";

interface TList {
  id: number;
  text: string;
  completed: boolean;
}
export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<TList[]>([
    {
      id: 1,
      text: "할일 1",
      completed: false,
    },
    {
      id: 2,
      text: "할일 2",
      completed: false,
    },
  ]);

  // 입력값 변경내용 확인
  const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // 입력 확인
  const textInputHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: TList = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    // 아래처럼도 사용 가능
    // setTodoList(todoList.concat(newTodo))
    // 입력한 값 지우기
    setInputText("");
  };

  return (
    <div className="todoListContainer">
      {todoList.map((item) => (
        <TodoItem key={item.id} text={item.text} completed={item.completed} />
      ))}
      <CreateTodo onChange={textTypingHandler} onSubmit={textInputHandler} />
    </div>
  );
}
