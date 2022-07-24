<script setup lang="ts">
import { XCircleIcon, CheckCircleIcon } from "@heroicons/vue/outline/index.js";
import { Todo, useTodoStore } from "~~/store/todo";

const props = defineProps<{
  item: Todo;
}>();

const todoStore = useTodoStore();

const deleteItem = (id: string) => todoStore.removeItem(id);

const updateItem = (todo: Todo) => {
  const currentState = todo.done;
  console.log(todo);

  todoStore.updateItem(todo.id, { done: !currentState });
};

const parsedDate = computed(() =>
  new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    dateStyle: "short",
  }).format(new Date(props.item.createdAt))
);
</script>

<template>
  <ListItemContainer>
    <div class="max-w-10/12 overflow-hidden whitespace-nowrap text-ellipsis">
      <h1
        :class="{
          'line-through': item.done,
        }"
        class="text-2xl text-gray-700 select-none font-light uppercase"
        :title="item.label"
      >
        {{ item.label }}
      </h1>
      <p>
        <small class="text-gray-400">{{ parsedDate }}</small>
      </p>
    </div>

    <section class="flex items-center">
      <CheckCircleIcon
        class="w-10 h-10 transition-all duration-200 hover:text-green-400 mr-3 cursor-pointer"
        :class="{ 'text-green-400': item.done, 'text-gray-400': !item.done }"
        @click="updateItem(item)"
      />
      <XCircleIcon
        class="w-10 h-10 transition-all duration-200 text-red-400 hover:text-red-700 mr-3 cursor-pointer"
        @click="deleteItem(item.id)"
      />
    </section>
  </ListItemContainer>
</template>
