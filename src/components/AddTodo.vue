<template>
  <form @submit.prevent="onSubmint">
    <input type="text" v-model="title" />
    <button type="submit">Add todo</button>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  methods: {
    onSubmint() {
      console.log("Submit", this.title);
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    }
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-around;
}

input {
  width: 400px;
}
</style>
