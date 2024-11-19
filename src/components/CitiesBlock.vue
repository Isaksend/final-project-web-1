<template>
  <div class="cities-block">
    <h2 class="title">The cities</h2>
    <div class="cities-container">
      <div class="city-card" v-for="city in cities" :key="city.id">
        <router-link :to="'/city/' + city.id" class="city-link">
          <img :src="city.image" :alt="city.name" class="city-image" />
          <div class="city-name">{{ city.name }}</div>
        </router-link>
      </div>
    </div>
    <div class="arrow_block">
      <router-link to="/cities" class="arrow-link">
        <img src="../assets/arrow-right.png" alt="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CitiesBlock",
  data() {
    return {
      cities: [
        {
          id: 1,
          name: "Astana, KZ",
          image: "https://i.postimg.cc/ZRfTNJ9Q/astana-img-1.png",
        },
        {
          id: 2,
          name: "Dubai, UAE",
          image: "https://i.postimg.cc/KjRmrCB8/dubai-img-1.png",
        },
        {
          id: 3,
          name: "New-York, USA",
          image: "https://i.postimg.cc/j2mt8v4Q/new-york-img-1.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cities-block {
  background-color: #e8f8ff;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
}

.title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 20px;
}

.cities-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.city-card {
  width: 465px;
  height: 550px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.city-card:hover {
  transform: scale(1.05);
}
.city-link {
  text-decoration: none;
  color: inherit;
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
.arrow_block{
  margin-top: 30px;
}

.arrow-link{
  transition: 500ms;
  margin-left: 85%;
}

.arrow-link:hover {
  padding: 5px;
}
</style>
