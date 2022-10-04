interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  newTodoField: any;
}

export const NewTodoForm: React.FC<Props> = ({ newTodoField }) => {
  return (
    <form>
      <input
        data-cy="NewTodoField"
        type="text"
        ref={newTodoField}
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};