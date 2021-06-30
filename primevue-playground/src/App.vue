<template>
  <div>
    <span class="p-float-label">
      <InputText id="inputtext" type="text" v-model="text" />
      <label for="inputtext">Model</label>
    </span>
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      text: "",
    };
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