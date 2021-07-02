<template>
  <div>
    <TopNav />
    <AddBoat />
  </div>
</template>
<script>
import AddBoat from "./components/addBoat.vue";
import TopNav from "./components/TopNav.vue";
export default {
  name: "App",
  components: {
    AddBoat,
    TopNav,
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
  font-family: Arial;
}
</style>