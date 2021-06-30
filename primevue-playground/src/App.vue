<template>
  <div class="p-d-flex p-flex-column p-flex-sm-row">
    <!-- Photo Loader -->
    <div class="p-col-3">A Photo Here</div>

    <!-- FormGrid -->
    <div class="p-col-9">
      <div class="p-fluid p-formgrid p-grid">
        <!-- Boat Name -->
        <div class="p-field p-col-12 p-md-6">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="boatName" />
            <label for="inputtext">Name</label>
          </span>
        </div>

        <!-- loa -->
        <div class="p-field p-col-12 p-md-6">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="loa" />
            <label for="inputtext">Length (LOA)</label>
          </span>
        </div>
      </div>

      <div class="p-fluid p-formgrid p-grid">
        <!-- Make -->
        <div class="p-field p-col-12 p-md-6">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="make" />
            <label for="inputtext">Make</label>
          </span>
        </div>

        <!-- Model -->
        <div class="p-field p-col-12 p-md-6">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="model" />
            <label for="inputtext">Model</label>
          </span>
        </div>
      </div>

      <div class="p-fluid p-formgrid p-grid">
        <!-- Year -->
        <div class="p-field p-col-12 p-md-6">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="year" />
            <label for="inputtext">Year</label>
          </span>
        </div>

        <!-- hull -->
        <div class="p-field p-col-12 p-md-6">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="hullNumber" />
            <label for="inputtext">Hull Number</label>
          </span>
        </div>
      </div>
    </div>
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