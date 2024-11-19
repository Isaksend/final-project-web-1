
<template>
  <div>
    <SliderBlock />
    <CitiesBlock />
    <OurMission />
  </div>
</template>

<script>
import SliderBlock from "@/components/SliderBlock.vue";
import CitiesBlock from "@/components/CitiesBlock.vue";
import OurMission from "@/components/OurMission.vue";

export default {
  name: 'HomePage',
  components: {OurMission, CitiesBlock, SliderBlock},
};
</script>

<style scoped>

</style>
