<template>
  <div class="p-d-flex p-grid p-jc-center">
    <div class="p-col-12" style="max-width: 960px">
      <Header />
      <router-view class="p-mb-2 p-col-12"></router-view>
      <MyFooter class="p-col-12 p-text-center" />
    </div>
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