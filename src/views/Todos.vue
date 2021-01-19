<template>
  <section>
    <h2>Todo list</h2>
    <router-link to="/">Home</router-link>
    <hr />
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr />
    <Loader v-if="getIsLoading" />
    <TodoList
      v-bind:todos="getAllTodos"
      @remove-todo="removeTodo"
      v-else-if="getAllTodos.length"
    />
    <p v-else>No todos!</p>
  </section>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
import { mapGetters } from "vuex";
export default {
  name: "Todos",
  computed: {
    // filteredTodos() {
    //   if (this.filter === "all") {
    //     return this.getAllTodos;
    //   }
    //
    //   if (this.filter === "completed") {
    //     return this.getAllTodos.filter(todo => todo.completed);
    //   }
    //
    //   if (this.filter === "not-completed") {
    //     return this.getAllTodos.filter(todo => !todo.completed);
    //   }
    //
    //   return this.getAllTodos;
    // },
    ...mapGetters(["getAllTodos", "getIsLoading"])
  },
  data() {
    return {
      filter: "all"
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  mounted() {
    this.$store.dispatch("fetchTodos");
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    //   .then(response => response.json())
    //   .then(json => {
    //     setTimeout(() => {
    //       this.todosArray = json;
    //       this.loading = false;
    //     }, 1000);
    //   });
  },
  methods: {
    removeTodo(id) {
      this.todosArray = this.todosArray.filter(todo => todo.id !== id);
    },
    addTodo(todo) {
      this.todosArray.push(todo);
    }
  }
};
</script>

<style scoped></style>
