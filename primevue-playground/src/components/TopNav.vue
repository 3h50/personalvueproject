<template>
  <div>
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>
<script>
export default {
  name: "TopNav",
  data() {
    return {
      navItems: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/tabmenu" },
        {
          label: "Calendar",
          icon: "pi pi-fw pi-calendar",
          to: "/tabmenu/calendar",
        },
        { label: "Edit", icon: "pi pi-fw pi-pencil", to: "/tabmenu/edit" },
        {
          label: "Documentation",
          icon: "pi pi-fw pi-file",
          to: "/tabmenu/documentation",
        },
        { label: "Settings", icon: "pi pi-fw pi-cog", to: "/tabmenu/settings" },
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