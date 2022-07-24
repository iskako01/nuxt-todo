import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  label: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoState {
  items: Todo[] | undefined;
}
export interface TodoAdd {
  label: string;
}
export interface TodoUpdate {
  label?: string;
  done?: boolean;
}

const state = (): TodoState => ({
  items: [],
});

const getters = {
  getbyId: (state: TodoState) => (id: string) => {
    return state.items.find((item) => item.id === id);
  },
  getSortedTodos: (state: TodoState) => {
    return [...state.items].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  },
};
const actions = {
  addItem(partialTodo: TodoAdd) {
    const todo: Todo = {
      id: uuid(),
      ...partialTodo,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.items.push(todo);
  },

  removeItem(id: string) {
    this.items = this.items.filter((todo) => todo.id !== id);
  },

  updateItem(id: string, update: TodoUpdate) {
    const items = this.items;
    const index = items.findIndex(
      (item: Todo) => !!item && (item as Todo).id === id
    );

    console.log(index);

    items[index] = { ...items[index], ...update, updatedAt: new Date() };
  },
};

export const useTodoStore = defineStore("todoStore", {
  state,
  getters,
  actions,
});
