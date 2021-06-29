<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Boat msg="Welcome to Your Vue.js App" />
</template>

<script>
import Boat from "./components/Boat.vue";

export default {
  name: "App",
  components: {
    Boat,
  },
};
</script>

 <style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>