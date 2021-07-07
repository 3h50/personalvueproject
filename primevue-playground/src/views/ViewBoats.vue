<template>
  <div>
    <DataTable :value="boatList" responsiveLayout="stack" breakpoint="500px">
      <Column field="_id" header="Avatar">
        <template #body="slotProps">
          <!-- <Avatar :img="`/boatImg/${slotProps.data._id}.jpg`" shape="circle" /> -->
          <Avatar
            image="/images/sail.jpg"
            shape="circle"
            size="large"
            :blah="`/boatImg/${slotProps.data._id}.jpg`"
          />
        </template>
      </Column>
      <Column field="name" header="Name">
        <template #body="slotProps">
          <router-link :to="`/viewBoat/${slotProps.data._id}`">{{
            slotProps.data.name
          }}</router-link>
        </template>
      </Column>
      <Column field="year" header="Year"></Column>
      <Column field="make" header="Make"></Column>
      <Column field="model" header="Model"></Column>
      <Column field="loa" header="Length"></Column>
    </DataTable>
  </div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Avatar from "primevue/avatar";

export default {
  name: "ViewBoats",
  components: {
    DataTable,
    Column,
    Avatar,
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
