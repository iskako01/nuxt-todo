<script setup lang="ts">
import { computed } from '@vue/reactivity';

const props = defineProps<{ modelValue: string; error: boolean }>();

const emit = defineEmits<{
  (e: "update.modelValue", value: string): void;
  (e: "save"): void;
}>();

const localState = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update.modelValue", value);
  },
});
</script>

<template>
  <div
    class="w-9/12 max-w-lg mx-auto flex items-center justify-center mt-7 bg-white shadow p-5 rounded"
  >
    <input
      v-model="localState"
      @keypress.enter="$emit('save')"
      type="text"
      placeholder="Add a todo ..."
      class="py-2 px-4 border border-blue-200 focus:outline-blue-400 rounded"
    />
    <button
      @click="$emit('save')"
      class="transition-all duration-200 border border-blue-200 py-2 px-4 ml-3 hover:bg-blue-200 rounded"
    >
      save
    </button>
  </div>
</template>
