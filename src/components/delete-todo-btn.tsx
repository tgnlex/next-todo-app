import deleteTodo from '@/actions/delete-todo.ts';

function DeleteTodo(props: {todoId: number}) {
  return (
    <form action={deleteTodo.bind(null, props.todoId)}>
      <button type="submit" className="alert">X</button>
    </form>
  )
}

export default DeleteTodo;
