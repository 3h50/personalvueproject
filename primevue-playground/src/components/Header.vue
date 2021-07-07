<template>
  <div class="p-mb-5">
    <Menubar :model="navItems" />
    <router-view />
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
          icon: "pi pi-fw pi-power-off",
        },
        {
          label: "About",
          icon: "pi pi-fw pi-power-off",
        },
        {
          label: "Add New",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Boat",
              icon: "pi pi-fw pi-plus",
            },
            {
              label: "Log",
              icon: "pi pi-fw pi-plus",
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