"use server"
import db from '@/lib/database.ts';
import { revalidatePath } from 'next/cache'


async function deleteTodo(id: number) {
  const stmt = db.prepare(`DELETE FROM todos WHERE id = ?`);
  stmt.run(id);
  revalidatePath("/");
}

export default deleteTodo;
