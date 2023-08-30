import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import createPlugin from "logrocket-vuex";
import LogRocket, { log } from "logrocket";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
const logrocketPlugin = createPlugin(LogRocket);

export default createStore({
  state: {
    menuActive: true,
    newPizze: [
      {
        tasty: "salame verde",
        ing: "impasto integrale, pomodoro, zucchine, basilico",
        price: "5.00",
      },
      {
        tasty: "top",
        ing: "impasto classico, pomodoro, mozzarella, carciofi, brie",
        price: "7.00",
      },
      {
        tasty: "afa",
        ing: "impasto classico, pomodoro, salamino piccante, bufala, olio piccante, origano",
        price: "6.00",
      },
    ],
  },
  plugins: [vuexLocal.plugin, logrocketPlugin],
  getters: {},
  mutations: {
    SET_MENU_ACTIVE(state, payload) {
      state.menuActive = payload;
    },
    CREATE_PIZZA(state, payload) {
      const { tasty, ing, price } = payload;
      state.newPizze.push({ tasty, ing, price });
      console.log("state.newPizze: ", state.newPizze);
    },
  },
  actions: {},
  modules: {},
});
