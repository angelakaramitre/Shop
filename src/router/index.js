import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue"
import Products from "../views/ShopProducts.vue"
import Single from "../views/Single.vue"
const routes = [
{
  name: "Home",
  path: "/",
  component: Home,
},
{
  name: "About",
  path: "/about",
  component: About,
},
{
  name: "Contact",
  path: "/contact",
  component: Contact,
},
{
  name: "ShopProducts",
  path: "/products",
  component: Products
},
{
  name: "Single",
  path: "/single",
  component: Single, 
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;