<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, login } = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const logginIn = () => {
  login(username.value, password.value);
  // If user is authenticated, send them to the home page
  if (isAuthenticated.value) {
    router.push("/");
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen-nonav">
    <!-- Logged in: {{ isAuthenticated }} -->
    <div
      class="flex shadow-2xl rounded-lg justify-center items-center bg-gray-100 overflow-hidden"
    >
      <img class="h-64" src="../assets/bglogin.png" alt="Hello GB" />
      <form @submit.prevent="logginIn" class="flex flex-col space-y-4 p-4">
        <input
          type="text"
          class="border-2 p-2 rounded-lg"
          placeholder="Username"
          v-model="username"
        />
        <input
          type="password"
          class="border-2 p-2 rounded-lg"
          placeholder="Password"
          v-model="password"
        />
        <button
          type="submit"
          @submit.prevent="logginIn"
          class="bg-blue-600 text-blue-200 py-4 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
