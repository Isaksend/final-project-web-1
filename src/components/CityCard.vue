<template>
  <router-link :to="'/city/' + id" class="city-card">
    <img :src="image" :alt="name" class="city-image" />
    <div class="city-name">{{ name }}</div>
  </router-link>
</template>

<script>
export default {
  name: "CityCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.city-card {
  width: 465px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  text-align: center;
}

.city-image {
  width: 100%;
  height: 550px;
  object-fit: cover;
  border-radius: 10px;
}

.city-name {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
