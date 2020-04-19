<template>
  <div>
    <form action="#" @submit="onSubmit">
      <label for="key">
        <input v-model="key" id="key" name="key" type="test" />
      </label>
      <button type="submit">Search</button>
    </form>
    <Items :items="items"></Items>
  </div>
</template>

<script>
import Items from "./Items.vue";
export default {
  name: "Form",
  data: function() {
    return {
      items: [],
      key: ""
    };
  },
  components: { Items },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      fetch(`https://images-api.nasa.gov/search?q=${this.key}&page=1`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.items = data.collection.items;
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
form {
  padding-bottom: 60px;
  button {
    color: #2c3e50;
    background-color: #41b883;
    outline: none;
    box-shadow: none;
    border: none;
    padding: 10px 15px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }

  input {
    padding: 9px 15px;
    margin-right: 15px;
    border: 2px solid #2c3e50;
    background-color: #aeb1b3;
  }
}
</style>
