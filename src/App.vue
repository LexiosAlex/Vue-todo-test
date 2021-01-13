<template>
  <h1>Todo application</h1>
  <AddTodo @add-todo="addTodo" />
  <hr />
  <TodoList v-bind:todos="todosArray" @remove-todo="removeTodo" />
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
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
    TodoList,
    AddTodo
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
