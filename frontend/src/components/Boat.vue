<template>
  <SchemaForm :schema="mySchema" />
</template>

<script>
import { ref } from "vue";
import { SchemaForm, useSchemaForm } from "formvuelate";

export default {
  components: { SchemaForm },
  setup() {
    const formModel = ref({});
    useSchemaForm(formModel);

    const mySchema = ref({
      name: {
        component: FormText,
      },
      photoLoc: {},
      make: {
        component: FormText,
      },
      model: {
        component: FormText,
      },
      length: {
        component: FormText,
      },
      serial: {
        component: FormText,
      },
      year: {
        component: FormText,
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
