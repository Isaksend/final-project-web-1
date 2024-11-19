<template>
  <nav>
    <div class="logo-block">
      <img src="../assets/logo.png" alt="logo"/>
    </div>
    <div class="navigation-block">
      <router-link to="/" class="link_item">Home</router-link>
      <router-link to="/cities" class="link_item">Cities</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
  .link_item{
    font-weight: bold;
    font-size: 1.25rem;
  }
</style>
