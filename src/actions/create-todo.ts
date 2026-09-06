"use server"
import db from '@/lib/database.ts';
import { revalidatePath } from 'next/cache';


async function createTodo(formData: FormData) {
  const task = formData.get('task') as string;
  const stmt = await db.prepare('INSERT INTO todos (task) VALUES (?)');
  stmt.run(task);
  revalidatePath("/");
}

export default createTodo;
