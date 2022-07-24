<script lang="ts" setup>
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const loading = ref(false);
const error = ref(null);
const loginMode = ref(true);

const authorize = () => {
  console.log("logging in ...");
};
</script>

<template>
  <main class="min-h-screen pt-10 bg-gray-100">
    <section class="text-center py-10">
      <h1 class="text-5xl font-bold text-gray-700 mb-4">
        {{ loginMode ? "Login to your account" : "Create an account" }}
      </h1>

      <form class="flex flex-col max-w-lg mx-auto" @submit.prevent>
        <input
          type="email"
          v-model="email"
          placeholder="Email address"
          id="email"
          name="email"
          class="px-2 py-3 mt-3 border-1 border-lime-200"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password "
          id="password"
          name="password"
          class="px-2 py-3 mt-3 border-1 border-lime-200"
        />

        <input
          v-if="!loginMode"
          type="password"
          v-model="passwordConfirm"
          placeholder="Password confirm"
          id="passwordConfirm"
          name="passwordConfirm"
          class="px-2 py-3 mt-3 border-1 border-lime-200"
        />

        <button
          class="p-5 bg-blue-500 text-white rounded-sm mt-5 disabled:bg-gray-400 disabled:text-white"
          :disabled="loading"
          @click="authorize"
        >
          Login
        </button>

        <p v-if="error" class="text-red-500">{{ error }}</p>

        <a @click="loginMode = !loginMode" class="mt-7 underline cursor-pointer"
          >Or {{ loginMode ? "Register" : "Login" }}
        </a>
      </form>
    </section>
  </main>
</template>
