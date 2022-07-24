<script setup lang="ts">
import { Todo } from "~~/store/todo";

defineProps<{
  item: Todo;
}>();
</script>

<template>
  <section>
    <div>{{ item.label }}</div>
    <div>{{ item.createdAt }}</div>
  </section>
</template>
