<template>
  <div class="notes">
    <v-card v-for="(page, index) in pages" :key="index">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ page.title }} tit + {{ index }}</h3>
          <div>{{ page.content }} tit</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat @click="deleteNote(index)" color="orange">Delete</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn fab dark color="indigo" class="floatButton" @click="newNote()">
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "Notes",
  props: ["pages"],
  methods: {
    newNote() {
      this.$emit("new-note");
    },
    deleteNote(item) {
      this.$emit("delete-note", item++);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only
-->
<style scoped>
.floatButton {
  margin: 10px;
}
</style>
