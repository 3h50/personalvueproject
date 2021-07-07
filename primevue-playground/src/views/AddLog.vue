<template>
  <div class="p-d-flex p-flex-column p-flex-md-row p-ai-center">
    <!-- Photo Loader -->
    <div class="p-col-12 p-md-3 p-fliud p-mb-3 p-mb-md-0">
      A map will be here of the waypoints and things
    </div>

    <!-- FormGrid -->
    <div class="p-col-12 p-md-9">
      <div class="p-formgrid p-grid p-fluid">
        <!-- Log Title -->
        <div class="p-field p-col-12 p-sm-6 p-mb-3">
          <span class="p-float-label">
            <InputText id="title" type="text" v-model="log.title" />
            <label for="title">Title</label>
          </span>
        </div>
        <!-- Log Flag -->
        <div class="p-d-flex p-col-12 p-sm-6 p-mb-3">
          <span class="p-float-label">
            <Dropdown id="flag" :options="flags" v-model="log.flag" />
            <label for="Flag">Flag</label>
          </span>
        </div>
        <!-- SkiffScribble -->
        <div class="p-col-12 p-mb-3">
          <span class="p-float-label">
            <Textarea
              id="skippersBrief"
              type="text"
              v-model="log.skippersBrief"
              :autoResize="true"
              rows="1"
              style="width: 100%"
            />
            <label for="skippersBrief">Skippers Brief</label>
          </span>
        </div>
        <!-- Captain's Log -->
        <div class="p-col-12 p-fluid p-mb-3">
          <span class="p-float-label">
            <Textarea
              id="captainsLog"
              type="text"
              v-model="log.captainsLog"
              :autoResize="true"
              rows="5"
              style="width: 100%"
            />
            <label for="captainsLog">Captain's Log</label>
          </span>
        </div>
        <!-- Submit Button  -->
      </div>
      <div class="p-formgrid p-grid p-fluid p-px-2">
        <Button v-on:click="submitLog" label="Submit Log" />
      </div>
    </div>
  </div>
</template>
<script>
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
// import FileUpload from "primevue/fileupload";
import Textarea from "primevue/textarea";
export default {
  name: "AddLog",
  components: {
    InputText,
    Dropdown,
    Button,
    Textarea,
  },
  data() {
    return {
      boat: {},
      log: {
        boat: "",
        title: "",
        skippersBrief: "",
        captainsLog: "",
        author: "60d4b44a4658b063648d169e",
        flag: "USA",
        waypoints: [],
      },
      flags: [1, 3, 9, 7],
    };
  },
  methods: {
    submitLog: function () {
      console.log(this.$route.params.id);

      fetch("http://localhost:5000/logs/new", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.log),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // this is super inneficient, need to pass back the data from create to the component rather than it refreshing.
          //   this.$router.push({ name: "View Log", params: { id: data._id } });
        })
        .catch((error) => {
          console.error("ErrorLog:", error);
        });
    },
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
          this.boat = res;
        })
        .catch((error) => {
          console.error("ErrorLog:", error);
        });
    },
    setBoat: function () {
      this.log.boat = this.$route.params.anotherid;
      this.fetchBoat();
      // REFACTOR USING SAME CALL AS FROM VIEWBOAT
    },
  },
  created() {
    this.setBoat();
  },
};
</script>