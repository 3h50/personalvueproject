<template>
  <div class="p-d-flex p-flex-column p-flex-md-row p-ai-center p-px-5">
    <!-- Photo Loader -->
    <div class="p-col-12 p-md-3 p-fliud p-mb-3 p-mb-md-0">
      <FileUpload
        name="boatProfilePhoto"
        :showUploadButton="false"
        :showCancelButton="false"
        url="./upload"
        accept="image/*"
        :maxFileSize="6000000"
      />
    </div>

    <!-- FormGrid -->
    <div class="p-col-12 p-md-9">
      <div class="p-formgrid p-grid p-fluid">
        <!-- Boat Name -->
        <div class="p-field p-col-12 p-sm-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="boatName" type="text" v-model="boatName" />
            <label for="boatName">Name</label>
          </span>
        </div>

        <!-- Fix the margin issues here -->
        <!-- loa -->
        <div class="p-d-flex p-col-12 p-sm-6 p-mb-5">
          <div class="p-col-6 p-px-0">
            <span class="p-float-label">
              <InputText id="loa" type="text" v-model="loa" />
              <label for="loa">Length</label>
            </span>
          </div>
          <div class="p-col-6 p-pr-0">
            <span class="p-float-label">
              <Dropdown id="unit" :options="units" v-model="unit" />
              <label for="unit">Units</label>
            </span>
          </div>
        </div>
      </div>

      <div class="p-formgrid p-grid p-fluid">
        <!-- Make -->
        <div class="p-field p-col-12 p-sm-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="make" type="text" v-model="make" />
            <label for="make">Make</label>
          </span>
        </div>

        <!-- Model -->
        <div class="p-field p-col-12 p-sm-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="model" type="text" v-model="model" />
            <label for="model">Model</label>
          </span>
        </div>
      </div>

      <div class="p-formgrid p-grid p-fluid">
        <!-- Year -->
        <div class="p-field p-col-12 p-sm-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="year" type="text" v-model="year" />
            <label for="year">Year</label>
          </span>
        </div>

        <!-- hull -->
        <div class="p-field p-col-12 p-sm-6 p-mb-5">
          <span class="p-float-label">
            <InputText id="hullNumber" type="text" v-model="hullNumber" />
            <label for="hullNumber">Hull Number</label>
          </span>
        </div>
      </div>

      <div class="p-formgrid p-grid p-fluid p-px-2">
        <Button v-on:click="submitBoat" label="Submit Boat" />
      </div>
    </div>
  </div>
</template>
<script>
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
export default {
  name: "AddBoat",
  components: {
    InputText,
    Dropdown,
    Button,
    FileUpload,
  },
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
      boatProfilePhoto: "",
    };
  },
  methods: {
    submitBoat: function () {
      let newBoatPayload = {
        name: this.boatName,
        make: this.make,
        model: this.model,
        loa: this.loa,
        loaUnits: this.unit,
        serial: this.hullNumber,
        year: this.year,
      };
      console.log(newBoatPayload);

      fetch("http://localhost:5000/boats/new", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBoatPayload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // this is super inneficient, need to pass back the data from create to the component rather than it refreshing.
          this.$router.push({ name: "View Boat", params: { id: data._id } });
        })
        .catch((error) => {
          console.error("ErrorLog:", error);
        });
    },
  },
};
</script>