<template>
  <div>
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style scoped>

</style>
