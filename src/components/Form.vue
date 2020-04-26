<template>
  <div>
    <form action="#" @submit="onSubmit">
      <label for="key">
        <input v-model="key" id="key" name="key" type="test" />
      </label>
      <button type="submit">Search</button>
    </form>
    <Photos :requesting="requesting" :error="error" :items="photos"></Photos>
  </div>
</template>

<script>
import Photos from "./Photos.vue";
import { mapState } from "vuex";

export default {
  name: "Form",
  data: function() {
    return {
      key: ""
    };
  },
  components: { Photos },
  computed: mapState({
    photos: state => state.photos.data,
    requesting: state => state.photos.requesting,
    error: state => state.photos.error
  }),
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      this.$store.dispatch("photos/loadPhotos", this.key);
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
