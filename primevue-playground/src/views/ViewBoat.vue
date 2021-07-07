<template>
  <div class="p-d-flex p-flex-column p-flex-md-row p-ai-center p-px-5">
    <!-- Photo Loader -->
    <div class="p-col-12 p-md-3 p-fliud p-mb-3 p-mb-md-0">Display Photo</div>

    <!-- FormGrid -->
    <div class="p-col-12 p-md-9">
      <div class="p-grid p-fluid">
        <!-- Boat Name -->
        <div class="p-col-12 p-sm-6 p-mb-5">Boat Name:</div>

        <!-- Fix the margin issues here -->
        <!-- loa -->
        <div class="p-d-flex p-col-12 p-sm-6 p-mb-5">Length:</div>
      </div>

      <div class="p-grid p-fluid">
        <!-- Make -->
        <div class="p-col-12 p-sm-6 p-mb-5">Make:</div>

        <!-- Model -->
        <div class="p-col-12 p-sm-6 p-mb-5">Model:</div>
      </div>

      <div class="p-grid p-fluid">
        <!-- Year -->
        <div class="p-col-12 p-sm-6 p-mb-5">Year:</div>

        <!-- hull -->
        <div class="p-field p-col-12 p-sm-6 p-mb-5">Hull Number:</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewBoat",
  data() {
    return {
      boatID: "",
      boatName: "",
      loa: "",
      make: "",
      model: "",
      year: "",
      hullNumber: "",
      unit: "",
      units: ["ft", "m"],
    };
  },
  methods: {
    fetchBoat: async function (id) {
      fetch(`http://localhost:5000/boats/${id}`, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          this.boatName = res.boatName;
          this.loa = res.loa;
          this.make = res.make;
          this.model = res.model;
          this.year = res.year;
          this.hullNumber = res.hullNumber;
          this.unit = res.unit;
          this.boatProfilePhoto = res.photo;
        })
        .catch((error) => {
          console.error("ErrorLog:", error);
        });
    },
  },
  completed() {},
};
</script>