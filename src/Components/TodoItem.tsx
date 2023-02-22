import { useState } from "react";
import { TList } from "./TodoList";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onClickDelete(id: number): void;
  onClickUpdate(updatedTodoItem: TList): void;
}

export default function TodoItem({
  id,
  text,
  completed,
  onClickDelete,
  onClickUpdate,
}: TodoItemProps) {
  // 수정여부
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>(text);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTodoItem = {
      id: id,
      text: updatedText,
      completed: completed,
    };
    onClickUpdate(updatedTodoItem);
    setIsUpdating(false);
  };

  const handleComplete = () => {
    const updatedTodoItem = {
      id: id,
      text: text,
      completed: !completed,
    };
    onClickUpdate(updatedTodoItem);
  };

  return (
    <div>
      {!isUpdating ? (
        <li className="todoContainer">
          <button className="completeBtn" onClick={handleComplete}>
            {completed ? "✔" : null}
          </button>
          <div className="itemContainer">
            <p
              className="itemText"
              style={completed ? { textDecoration: "line-through" } : undefined}
            >
              {text}
            </p>
            <div className="buttonContainer">
              <button
                type="button"
                className="inlineBtnBox"
                onClick={() => setIsUpdating(true)}
              >
                <AiOutlineEdit size="17" />
              </button>
              <button
                type="button"
                className="inlineBtnBox"
                onClick={() => onClickDelete(id)}
              >
                <AiOutlineDelete size="17" />
              </button>
            </div>
          </div>
        </li>
      ) : (
        <li className="todoContainer">
          <button className="completeBtn" onClick={handleComplete}>
            {completed ? "✔" : null}
          </button>
          <form onSubmit={handleFormSubmit} className="itemContainer">
            <input
              className="itemTextInput"
              type="text"
              value={updatedText}
              onChange={handleInputChange}
            />
            <div className="buttonContainer">
              <button type="submit" className="inlineBtnBox">
                <AiOutlineCheck size="17" />
              </button>
              <button
                type="button"
                className="inlineBtnBox"
                onClick={() => setIsUpdating(false)}
              >
                <AiOutlineClose size="17" />
              </button>
            </div>
          </form>
        </li>
      )}
    </div>
  );
}
