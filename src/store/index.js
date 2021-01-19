import { createStore } from "vuex";
import todos from "@/store/modules/todos";

const store = createStore({
  modules: {
    todos
  }
});

export default store;
