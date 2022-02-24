import { createRouter, createWebHistory } from "vue-router";

// Importing the pages
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Hello from "./pages/hello.vue";
import NotFound from "./pages/404.vue";

// Creating the routes
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/hello",
    name: "Hello",
    component: Hello,
  },
  // If a path isn't found then redirect to the 404 page not found page
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

// Creating the router
const router = createRouter({
  // What to do when you go back a page
  history: createWebHistory(),
  // Importing the routers we created
  routes: routes,
});

export default router;
