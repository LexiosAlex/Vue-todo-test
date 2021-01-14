<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, index) of todos"
        v-bind:todo="todo"
        v-bind:key="todo.id"
        v-bind:index="index"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    }
  },
  name: "TodoList"
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
