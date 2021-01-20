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
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
      v-else-if="filteredTodos.length"
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
    filteredTodos() {
      if (this.filter === "all") {
        return this.getAllTodos;
      }

      if (this.filter === "completed") {
        return this.getAllTodos.filter(todo => todo.completed);
      }

      if (this.filter === "not-completed") {
        return this.getAllTodos.filter(todo => !todo.completed);
      }

      return this.getAllTodos;
    },
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
  },
  methods: {
    removeTodo(id) {
      this.$store.dispatch("removeTodo", { id });
    },
    addTodo(todo) {
      this.$store.dispatch("addTodo", { todo });
    }
  }
};
</script>

<style scoped></style>
