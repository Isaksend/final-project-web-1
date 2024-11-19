<template>
  <div class="city-details">
    <div class="city-header">
      <img :src="city.head_image" :alt="city.fullname" class="city-image" />
      <h1 class="city-name">{{ city.fullname }}</h1>
    </div>
    <section class="activities">
      <h2>Activities:</h2>
      <ul>
        <li v-for="activity in city.activities" :key="activity.id">
          <strong>{{ activity.name }}</strong>
          <p>{{ activity.description }}</p>
          <p>Price: {{ activity.price }}</p>
        </li>
      </ul>
      <div class="activity-gallery">
        <img
            v-for="(photo, index) in city.activityPhotos"
            :key="'activity-' + index"
            :src="photo"
            :alt="'Activity Photo ' + (index + 1)"
            class="gallery-photo"
        />
      </div>
    </section>

    <section class="accommodations">
      <h2>Accommodations:</h2>
      <ul>
        <li v-for="accommodation in city.accommodations" :key="accommodation.id">
          <strong>{{ accommodation.name }}</strong>
          <p>Price: {{ accommodation.price }}</p>
        </li>
        <div class="accommodations-footer">
          <h3>You can check more here:</h3>
          <ul>
            <li>
              <a :href="city.links.booking" target="_blank" rel="noopener noreferrer">
                Booking.com
              </a>
            </li>
            <li>
              <a :href="city.links.airbnb" target="_blank" rel="noopener noreferrer">
                Airbnb
              </a>
            </li>
            <li>
              <a :href="city.links.krisha || city.links.expedia" target="_blank" rel="noopener noreferrer">
                Krisha.kz
              </a>
            </li>
          </ul>
        </div>
      </ul>
      <div class="accommodation-gallery">
        <img
            v-for="(photo, index) in city.accommodationPhotos"
            :key="'accommodation-' + index"
            :src="photo"
            :alt="'Accommodation Photo ' + (index + 1)"
            class="gallery-photo"
        />
      </div>
    </section>
    <div class="quiz-link">
      <router-link :to="`/city/${city.id}/quiz`" class="quiz-button">Take the Quiz</router-link>
    </div>
  </div>
</template>

<script>
import citiesData from "@/data/cities.json";

export default {
  name: "CityDetails",
  data() {
    return {
      city: null,
    };
  },
  created() {
    const cityId = parseInt(this.$route.params.id);
    this.city = citiesData.find((city) => city.id === cityId);
  },
};
</script>

<style scoped>
.city-details {
  padding: 40px;
  border-radius: 10px;
}

.city-header {
  text-align: center;
  margin-bottom: 20px;
}

.city-image {
  width: 100%;
  height: 800px;
  object-fit: cover;
  border-radius: 10px;
}

.city-name {
  font-size: 4rem;
  font-weight: bold;
  margin-top: -100px;
  text-align: left;
  margin-left: 30px;
  color: #ffffff;
}

.activities {
  margin-top: 5rem;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.activities ul {
  flex: 1;
  list-style-type: decimal;
  padding: 0;
  margin: 0;
  font-size: 1rem;
}

.activities li {
  margin-bottom: 20px;
  line-height: 1.5;
}

.activities li strong {
  display: block;
  font-weight: bold;
}

.activities li p {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
}

.activity-gallery {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: start;
}

.gallery-photo {
  width: 465px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.gallery-photo:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.gallery-photo::after {
  content: attr(alt);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  text-align: center;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.accommodations {
  margin-top: 5rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 40px;
}

.accommodations ul {
  flex: 1;
  margin: 0;
  padding: 0;
  list-style-type: decimal;
  font-size: 1.2rem;
  color: #000000;
}

.accommodations li {
  margin-bottom: 20px;
  line-height: 1.5;
}

.accommodations li strong {
  display: block;
  font-weight: bold;
  font-size: 1.1rem;
}

.accommodations li p {
  margin: 5px 0 0 0;
  font-size: 0.9rem;
  color: #555;
}

.accommodation-gallery {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.accommodations-footer {
  margin-top: 20px;
  font-size: 1rem;
  color: #031954;
}

.accommodations-footer ul {
  list-style-type: decimal;
  padding-left: 20px;
  font-size: 1rem;
}

.accommodations-footer a {
  text-decoration: none;
  color: #031954;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.accommodations-footer a:hover {
  color: #ff5722;
}


.quiz-link {
  text-align: center;
  margin: 20px 0;
  margin-top: 5rem;
}

.quiz-button {
  background-color: rgba(74, 209, 19, 0.87);
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.quiz-button:hover {
  background-color: rgba(41, 147, 0, 0.87);
}
</style>
