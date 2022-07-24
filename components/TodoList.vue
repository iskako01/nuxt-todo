<script setup lang="ts">
import { Todo } from "~~/store/todo";

defineProps<{
  items: Todo[] | undefined;
}>();
</script>

<template>
  <section v-if="items.length > 0">
    <TodoItem v-for="item in items" :key="item.id" :item="item" />
  </section>
</template>
