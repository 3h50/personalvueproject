<template>
  <div class="p-mb-5">
    <Menubar :model="navItems" />
  </div>
</template>
<script>
import Menubar from "primevue/menubar";
export default {
  name: "Header",
  components: {
    Menubar,
  },
  data() {
    return {
      navItems: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
        },
        {
          label: "Add New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Boat",
              icon: "pi pi-fw pi-plus",
            },
            {
              label: "Log",
              icon: "pi pi-fw pi-compass",
            },
          ],
        },
        {
          label: "View",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Boats",
              icon: "pi pi-fw pi-align-left",
            },
            {
              label: "Logs",
              icon: "pi pi-fw pi-align-right",
            },
            {
              seperator: true,
            },
            {
              label: "Advanced Search",
              icon: "pi pi-fw pi-align-right",
            },
          ],
        },
        {
          label: "Account",
          icon: "pi pi-fw pi-power-off",
        },
      ],
    };
  },
  methods: {
    print: function () {
      console.log("hi");
    },
  },
};
</script>