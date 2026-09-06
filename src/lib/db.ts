import type {Todo} from "@/models/todos.ts";

interface Database {
  todos: Array<Todo>;
}

const db: Database = {
  todos: [
    {id: 1, task: "Get this working" }
  ]
}

export default db;
