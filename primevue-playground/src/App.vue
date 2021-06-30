<template>
  <div class="p-d-flex p-flex-column p-flex-sm-row">
    <!-- Photo Loader -->
    <div class="p-col-3">Photo Uploader</div>

    <!-- FormGrid -->
    <div class="p-col-9">
      <div class="p-formgrid p-grid p-fluid">
        <!-- Boat Name -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="boatName" />
            <label for="inputtext">Name</label>
          </span>
        </div>

        <!-- loa -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="loa" />
            <label for="inputtext">Length (LOA)</label>
          </span>
        </div>
      </div>

      <div class="p-formgrid p-grid p-fluid">
        <!-- Make -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="make" />
            <label for="inputtext">Make</label>
          </span>
        </div>

        <!-- Model -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="model" />
            <label for="inputtext">Model</label>
          </span>
        </div>
      </div>

      <div class="p-formgrid p-grid p-fluid">
        <!-- Year -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="inputtext" type="text" v-model="year" />
            <label for="inputtext">Year</label>
          </span>
        </div>

        <!-- hull -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
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
      boatName: "",
      loa: "",
      make: "",
      model: "",
      year: "",
      hullNumber: "",
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
  font-family: Arial;
}
</style>