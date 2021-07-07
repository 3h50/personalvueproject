<template>
  <div>
    <TopNav />
    <router-view />
    <ViewBoat />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
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