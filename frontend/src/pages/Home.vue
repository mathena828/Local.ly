<template>
  <div class="home">
    <Carousel></Carousel>
    <Search></Search>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Search from "../components/Search.vue";
export default {
  name: "home",
  components: { Carousel, Search },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
