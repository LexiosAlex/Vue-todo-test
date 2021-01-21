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
    },
    removeTodo(ctx, { id }) {
      ctx.commit("removeTodo", id);
    },
    addTodo(ctx, { todo }) {
      ctx.commit("addTodo", todo);
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
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    }
  },
  state: {
    todos: [],
    loading: false
  },
  getters: {
    getAllTodos(state) {
      return state.todos;
    },
    getIsLoading(state) {
      return state.loading;
    }
  }
};
