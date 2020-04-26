<template>
  <div class="container">
    <div v-if="items" class="photos">
      <div class="photos__item" v-for="item in items" :key="item.data[0].nasa_id">
        <img v-if="item.links" :src="item.links[0].href" />
      </div>
    </div>
    <div v-if="requesting">Loading</div>
    <div v-if="error">Error</div>
  </div>
</template>

<script>
export default {
  name: "Photos",
  props: {
    items: Array,
    requesting: Boolean,
    error: Boolean
  }
};
</script>
<style scoped lang="scss">
.photos {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 20% 20% 20% 20% 20%;

  &__item {
    img {
      max-width: 100%;
      height: auto;
      width: auto;
      object-fit: cover;
      align-items: center;
      justify-content: center;
      max-height: 200px;
    }
  }
}
</style>
