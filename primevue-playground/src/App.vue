<template>
  <div>
    <Header />
    <router-view></router-view>
    <MyFooter />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    Header,
    MyFooter,
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
  max-width: 960px;
  justify-content: center;
  /* align-items: center; */
  font-family: Arial;
}
</style>