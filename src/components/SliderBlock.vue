<template>
  <div class="slider">
    <div class="slides">
      <img src="../assets/main_bkg_1.jpg" alt="Slide 1" />
      <img src="../assets/main_bkg_2.jpg" alt="Slide 2" />
      <img src="../assets/main_bkg_3.jpg" alt="Slide 3" />
    </div>
    <button class="prev" @click="moveSlide(-1)"><img src="../assets/Left_arrow.png"/></button>
    <button class="next" @click="moveSlide(1)"><img src="../assets/Right_arrow.png"/></button>
    <div class="title_text">
      Life Is Adventure Make<br/>
      The Best Of It
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelSlider",
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    moveSlide(direction) {
      const totalSlides = 3;
      this.currentSlide = (this.currentSlide + direction + totalSlides) % totalSlides;
      const slides = this.$el.querySelector(".slides");
      slides.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    },
  },
};
</script>
<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 800px;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.slides img {
  width: 100%;
  height: auto;
  display: block;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  color: white;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1000;
  font-size: 20px;
}

button:hover {
  background: rgba(255, 255, 255, 0.7);
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

.title_text{
  position: absolute;
  font-size: 60px;
  text-align: center;
  color: white;
  font-weight: 600;
}
</style>