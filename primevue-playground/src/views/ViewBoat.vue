<template>
  <div class="p-d-flex p-flex-column p-flex-md-row p-ai-center p-px-5">
    <!-- Photo Loader -->
    <div class="p-col-12 p-md-3 p-fliud p-mb-3 p-mb-md-0">Display Photo</div>

    <!-- FormGrid -->
    <div class="p-col-12 p-md-9">
      <div class="p-grid p-fluid">
        <!-- Boat Name -->
        <div class="p-col-12 p-sm-6 p-mb-5">Boat Name: {{ data.name }}</div>

        <!-- Fix the margin issues here -->
        <!-- loa -->
        <div class="p-d-flex p-col-12 p-sm-6 p-mb-5">
          Length: {{ `${data.loa}${data.unit ? data.unit : ""}` }}
        </div>
      </div>

      <div class="p-grid p-fluid">
        <!-- Make -->
        <div class="p-col-12 p-sm-6 p-mb-5">Make: {{ data.make }}</div>

        <!-- Model -->
        <div class="p-col-12 p-sm-6 p-mb-5">Model: {{ data.model }}</div>
      </div>

      <div class="p-grid p-fluid">
        <!-- Year -->
        <div class="p-col-12 p-sm-6 p-mb-5">Year: {{ data.year }}</div>

        <!-- hull -->
        <div class="p-field p-col-12 p-sm-6 p-mb-5">
          Hull Number: {{ data.serial }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewBoat",
  data() {
    return {
      data: {},
    };
  },
  methods: {
    fetchBoat: async function () {
      fetch(`http://localhost:5000/boats/${this.$route.params.id}`, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          this.data = res;
        })
        .catch((error) => {
          console.error("ErrorLog:", error);
        });
    },
  },
  created() {
    this.fetchBoat();
  },
};
</script>