<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  error: boolean;
//   loading: boolean;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "save"): void;
}>();
const localTodoValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div
    class="w-10/12 max-w-lg mx-auto flex items-center justify-center mt-7 mb-10 bg-white shadow p-5 rounded"
  >
    <input
      v-model="localTodoValue"
      @keypress.enter="$emit('save')"
      type="text"
      placeholder="Add a todo ..."
      class="py-2 px-4 border focus:outline-blue-400 rounded"
      :class="{ 'border-red-500': error, 'border-blue-200': !error }"
    />
    <button
      @click="$emit('save')"
      class="transition-all duration-200 border border-blue-200 py-2 px-4 ml-3 hover:bg-blue-200 rounded"
    >
      save
    </button>
  </div>
</template>
