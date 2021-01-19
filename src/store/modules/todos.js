export default {
  actions: {
    async fetchTodos(ctx) {
      ctx.commit("startFetchTodos");
      return fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            ctx.commit("fetchTodosSucceed");
            ctx.commit("updateTodos", json);
          }, 1000);
        });
    }
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    startFetchTodos(state) {
      state.loading = true;
    },
    fetchTodosSucceed(state) {
      state.loading = false;
    }
  },
  state: {
    todos: [],
    loading: true
  },
  getters: {
    getAllTodos(state) {
      return state.todos;
    },
    getIsLoading(state) {
      console.log(state);
      return state.loading;
    }
  }
};
