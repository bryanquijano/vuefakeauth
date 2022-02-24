<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen-nonav">
    <div
      class="flex shadow-2xl rounded-lg justify-center items-center bg-gray-100 overflow-hidden"
    >
      <img class="h-64" src="../assets/bglogin.png" alt="Hello GB" />
      <form class="flex flex-col space-y-4 p-4">
        <input
          type="text"
          class="border-2 p-2 rounded-lg"
          placeholder="Username"
        />
        <input
          type="password"
          class="border-2 p-2 rounded-lg"
          placeholder="Password"
        />
        <button type="submit" class="bg-blue-600 text-blue-200 py-4 rounded-lg">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
