interface InputTextProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLInputElement>): void;
}

export default function CreateTodo({ onChange, onSubmit }: InputTextProps) {
  return (
    <div className="todoCreateContainer">
      <form>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="할 일을 입력해 주세요."
        />
        <button onSubmit={(e) => onSubmit(e)}>등록하기</button>
      </form>
    </div>
  );
}
