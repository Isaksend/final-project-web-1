<template>
  <div class="container my-5 city-quiz">
    <h1 class="text-primary text-center mb-4">Quiz About {{ city.fullname }}</h1>
    <p class="text-center">Test your knowledge about {{ city.fullname }} by answering the questions below:</p>

    <form @submit.prevent="submitQuiz" class="mt-4">
      <div v-for="(question, index) in questions" :key="index" class="mb-4">
        <h5>Q{{ index + 1 }}: {{ question.text }}</h5>
        <div class="form-check" v-for="(option, optionIndex) in question.options" :key="optionIndex">
          <input
              class="form-check-input"
              type="radio"
              :name="'question-' + index"
              :value="option"
              v-model="answers[index]"
              :id="'question-' + index + '-option-' + optionIndex"
          />
          <label class="form-check-label" :for="'question-' + index + '-option-' + optionIndex">
            {{ option }}
          </label>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary mt-3 px-4">Submit Quiz</button>
      </div>
    </form>

    <div v-if="result !== null" class="alert alert-info mt-4 text-center">
      <h4>Your Score: {{ result }}/{{ questions.length }}</h4>
      <p v-if="result === questions.length">Amazing! You're a city expert!</p>
      <p v-else-if="result > questions.length / 2">Good job! Keep exploring {{ city.fullname }}!</p>
      <p v-else>Looks like you need to learn more about {{ city.fullname }}!</p>
    </div>
  </div>
</template>

<script>
import citiesData from "@/data/cities.json";

export default {
  name: "CityQuiz",
  data() {
    return {
      city: null,
      questions: [],
      answers: [],
      result: null,
    };
  },
  created() {
    const cityId = parseInt(this.$route.params.id);
    this.city = citiesData.find((city) => city.id === cityId);

    if (this.city && this.city.quiz) {
      this.questions = this.city.quiz.questions;
      this.answers = Array(this.questions.length).fill(null);
    }
  },
  methods: {
    submitQuiz() {
      this.result = this.answers.filter(
          (answer, index) => answer === this.questions[index].correct
      ).length;
    },
  },
};
</script>

<style scoped>

.form-check-input:checked {
  background-color: #007bff;
  border-color: #007bff;
}
</style>
