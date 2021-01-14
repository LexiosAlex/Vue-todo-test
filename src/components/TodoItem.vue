<template>
  <li>
    <span v-bind:class="{ 'todo-done': completed }">
      <input type="checkbox" v-model="completed" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}
    </span>
    <div class="todo-actions">
      <button class="remove-button" v-on:click="$emit('remove-todo', todo.id)">
        &times;
      </button>
      <button>&#9998;</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    index: Number,
    todo: {
      type: Object,
      required: true,
      title: String,
      completed: Boolean
    }
  },
  data() {
    return {
      completed: this.todo.completed
    };
  },
  name: "TodoItem"
};
</script>

<style scoped>
li {
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}

.remove-button {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

.todo-done {
  text-decoration: line-through;
}

.todo-actions /deep/ button {
  margin: 0 0.5rem;
}

input {
  margin-right: 1rem;
}
</style>
