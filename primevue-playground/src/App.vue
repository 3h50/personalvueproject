<template>
  <div class="p-d-flex p-flex-column p-flex-sm-row p-ai-center">
    <!-- Photo Loader -->
    <div class="p-col-3">
      <Card>
        <template #title>Upload Photo</template>
        <template #content> </template>
        <template #footer>
          <Button label="Upload" />
        </template>
      </Card>
    </div>

    <!-- FormGrid -->
    <div class="p-col-9">
      <div class="p-formgrid p-grid p-fluid">
        <!-- Boat Name -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="boatName" type="text" v-model="boatName" />
            <label for="boatName">Name</label>
          </span>
        </div>

        <!-- Fix the margin issues here -->
        <!-- loa -->
        <div class="p-d-flex p-col-12 p-lg-6 p-mb-5">
          <div class="p-col-6 p-px-0">
            <span class="p-float-label">
              <InputText id="loa" type="text" v-model="loa" />
              <label for="loa">Length</label>
            </span>
          </div>
          <div class="p-col-6 p-pr-0">
            <span class="p-float-label">
              <Dropdown id="unit" :options="units" v-model="unit" />
              <label for="unit">Unit</label>
            </span>
          </div>
        </div>
      </div>

      <div class="p-formgrid p-grid p-fluid">
        <!-- Make -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="make" type="text" v-model="make" />
            <label for="make">Make</label>
          </span>
        </div>

        <!-- Model -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="model" type="text" v-model="model" />
            <label for="model">Model</label>
          </span>
        </div>
      </div>

      <div class="p-formgrid p-grid p-fluid">
        <!-- Year -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="year" type="text" v-model="year" />
            <label for="year">Year</label>
          </span>
        </div>

        <!-- hull -->
        <div class="p-field p-col-12 p-lg-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="hullNumber" type="text" v-model="hullNumber" />
            <label for="hullNumber">Hull Number</label>
          </span>
        </div>
      </div>

      <div class="p-formgrid p-grid p-fluid p-px-2">
        <Button
          v-on:click="submitBoat"
          label="Submit Boat"
          disabled="{{!submitReady}}"
        />
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
      unit: "",
      units: ["ft", "m"],
      submitReady: false,
    };
  },
  methods: {
    submitBoat: function () {
      let newBoatPayload = {
        name: this.BoatName,
        model: this.model,
        loa: this.loa + this.unit,
        serial: this.hullNumber,
        year: this.year,
      };
      console.log(JSON.stringify(newBoatPayload));
    },
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