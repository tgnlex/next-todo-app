export const dynamic = 'force-dynamic';
import styles from "./page.module.scss";
import type { Todo } from '@/models/todo.ts';
import createTodo from '@/actions/create-todo.ts';
import DeleteTodo from '@/components/delete-todo-btn.tsx';
import Submit from '@/ui/submit.tsx';
import db from '@/lib/database.ts';
import { connection } from 'next/server';


export default async function Home() {
  await connection();
  const stmt = db.prepare('SELECT * FROM todos');
  const rows = stmt.all()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Todo App</h1>
        <ul className={styles.todos}>
          {rows.map((todo: Todo) => (
            <li key={todo.id}>{todo.id}. {todo.task} <DeleteTodo todoId={todo.id}/></li>
          ))}
        </ul>
        <form className={styles.form} action={createTodo}>
          <input  type="text" name="task" />
          <Submit type="submit">Submit</Submit>
        </form>
      </main>
    </div>
  );
}
