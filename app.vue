<script setup lang="ts">
import { useTodoStore } from "./store/todo";

const todoStore = useTodoStore();

const newTodo = ref("");
const error = ref(false);

const saveNewTodo = () => {
  if (newTodo.value.length < 0) {
    error.value = true;
    return;
  }
  todoStore.addItem({
    label: newTodo.value,
  });
  newTodo.value = "";

  console.log(todoStore.items);
};
</script>

<template>
  <main class="w-full min-h-screen bg-gray-100">
    <section class="text-center pt-7">
      <h1 class="text-4xl text-gray-800">What are you doing today?</h1>
    </section>

    <section class="md:w-8/12 md:mx-auto lg:w-6/12 py-4 rounded-lg">
      <TodoInput v-model="newTodo" @save="saveNewTodo" :error="error" />
      <!-- <TodoList /> -->
    </section>
  </main>
</template>
