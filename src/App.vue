<template>
  <h1>Todo application</h1>
  <hr />
  <TodoList v-bind:todos="todosArray" @remove-todo="removeTodo" />
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: "App",
  data() {
    return {
      todosArray: [
        { id: 1, title: "todo1", completed: true },
        { id: 2, title: "todo2", completed: true },
        { id: 3, title: "todo3", completed: false }
      ]
    };
  },
  components: {
    TodoList
  },
  methods: {
    removeTodo(id) {
      this.todosArray = this.todosArray.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
