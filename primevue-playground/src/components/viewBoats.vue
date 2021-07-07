<template>
  <div>
    <DataTable :value="products" responsiveLayout="scroll">
      <template #header>
        <div class="table-header">
          Boats
          <Button icon="pi pi-refresh" />
        </div>
      </template>
      <Column field="name" header="Name"></Column>
      <Column header="Photo">
        <template #body="slotProps">
          <img
            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
            :alt="slotProps.data.image"
            class="product-image"
          />
        </template>
      </Column>
      <Column field="length" header="Length">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column field="rating" header="Reviews">
        <template #body="slotProps">
          <Rating
            :modelValue="slotProps.data.rating"
            :readonly="true"
            :cancel="false"
          />
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <span
            :class="
              'product-badge status-' +
              slotProps.data.inventoryStatus.toLowerCase()
            "
            >{{ slotProps.data.inventoryStatus }}</span
          >
        </template>
      </Column>
      <template #footer>
        In total there are {{ products ? products.length : 0 }} products.
      </template>
    </DataTable>
  </div>
</template>


<script>
import ProductService from "./service/ProductService";
export default {
  name: "ViewBoat",
  data() {
    return {
      boats: [],
    };
  },
  methods: {
    fetchBoats: async function (id) {
      fetch(`http://localhost:5000/boats`, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          this.boats = JSON.stringify(res.boatName);
        })
        .catch((error) => {
          console.error("ErrorLog:", error);
        });
    },
  },
  boatService: null,
  created() {
    this.boatService = new BoatService();
  },
  mounted() {
    this.boatService.getBoatSmall().then((data) => (this.boats = data));
  },
  methods: {
    formatCurrency(value) {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>  