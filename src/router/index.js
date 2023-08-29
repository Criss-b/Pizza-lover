import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "index",
    path: "/",
    component: () =>
      import(/* webpackChunkName: "Index"*/ "../views/indexPage.vue"),
  },
  {
    name: "pizze",
    path: "/pizze",
    component: () =>
      import(/* webpackChunkName: "Pizze"*/ "../views/pizzePage.vue"),
  },
  {
    name: "create",
    path: "/create",
    component: () =>
      import(/* webpackChunkName: "Create"*/ "../views/createPage.vue"),
  },
  {
    name: "book",
    path: "/book",
    component: () =>
      import(/* webpackChunkName: "Book"*/ "../views/bookPage.vue"),
  },
  {
    name: "contacts",
    path: "/contacts",
    component: () =>
      import(/* webpackChunkName: "Contacts"*/ "../views/contactsPage.vue"),
  },
  {
    name: "menu",
    path: "/menu",
    component: () =>
      import(/* webpackChunkName: "Menu"*/ "../views/menuPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
