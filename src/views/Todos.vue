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
    <Loader v-if="loading" />
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
export default {
  name: "Todos",
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todosArray;
      }

      if (this.filter === "completed") {
        return this.todosArray.filter(todo => todo.completed);
      }

      if (this.filter === "not-completed") {
        return this.todosArray.filter(todo => !todo.completed);
      }

      return this.todosArray;
    }
  },
  data() {
    return {
      todosArray: [],
      loading: true,
      filter: "all"
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.todosArray = json;
          this.loading = false;
        }, 1000);
      });
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
