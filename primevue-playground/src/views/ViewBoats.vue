<template>
  <div>
    <DataTable :value="boatList" responsiveLayout="stack" breakpoint="600px">
      <Column field="name" header="Name">
        <template #body="slotProps">
          <router-link :to="`/viewBoat/${slotProps.data._id}`">{{
            slotProps.data.name
          }}</router-link>
        </template>
      </Column>
      <Column field="make" header="Make"></Column>
      <Column field="loa" header="Length"></Column>
    </DataTable>
  </div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "ViewBoats",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      boatList: null,
    };
  },
  methods: {
    fetchBoats: async function () {
      fetch(`http://localhost:5000/boats`, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          this.boatList = res;
        })
        .catch((error) => {
          console.error("ErrorLog:", error);
        });
    },
  },
  created() {
    this.fetchBoats();
    console.log(this.boatList);
  },
};
</script>
