<template>
  <span class="p-float-label">
    <!-- <SchemaForm :schema="mySchema" />
    <InputText id="inputtext" type="text" v-model="value1" />
    <label for="inputtext">InputText</label> -->
  </span>
</template>

<script>
import { ref } from "vue";
import { SchemaForm, useSchemaForm } from "formvuelate";
import InputText from "primevue/inputtext";

export default {
  components: {
    SchemaForm,
    InputText,
  },
  setup() {
    const formModel = ref({});
    useSchemaForm(formModel);

    const mySchema = ref({
      name: {
        component: InputText,
      },
      photoLoc: {},
      make: {
        component: InputText,
      },
      model: {
        component: InputText,
      },
      length: {
        component: InputText,
      },
      serial: {
        component: InputText,
      },
      year: {
        component: InputText,
      },
    });

    return {
      mySchema,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>