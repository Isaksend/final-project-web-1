<template>
  <div class="cities-page">
    <h2 class="title">The cities</h2>
    <div class="cities-container">
      <CityCard
          v-for="city in cities"
          :key="city.id"
          :id="city.id"
          :name="city.name"
          :image="city.image"
      />
    </div>
  </div>
</template>

<script>
import CityCard from "../components/CityCard.vue";
import citiesData from "@/data/cities.json";

export default {
  name: "CitiesPage",
  components: {
    CityCard,
  },
  data() {
    return {
      cities: citiesData,
    };
  },
};
</script>

<style scoped>
.cities-page {
  padding: 40px;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}

.cities-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 20px;
  justify-items: center;
}
</style>
