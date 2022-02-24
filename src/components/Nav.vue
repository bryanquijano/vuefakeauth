<template>
  <div class="bg-blue-800 text-blue-200 border-b-4 border-gray-900">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-3xl font-thin tracking-tighter">
        Basic<span class="font-normal">Router</span>
      </h1>
      <nav>
        <ul class="flex space-x-4">
          <!-- Static method -->
          <router-link to="/">
            <li
              class="py-8 px-4 hover:cursor-pointer hover:bg-blue-200 hover:text-blue-800"
            >
              Home
            </li>
          </router-link>
          <!-- Dynamic method -->
          <router-link :to="{ name: 'About' }">
            <li
              class="py-8 px-4 hover:cursor-pointer hover:bg-blue-200 hover:text-blue-800"
            >
              About
            </li>
          </router-link>
          <!-- Another method -->
          <router-link :to="{ path: '/hello', name: 'Hello' }">
            <li
              class="py-8 px-4 hover:cursor-pointer hover:bg-blue-200 hover:text-blue-800"
            >
              Hello
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
