<template>
  <v-form v-model="valid">
    <v-container>
      <v-col cols="12" md="10">
        <v-text-field
          class="center"
          v-model="firstname"
          :rules="nameRules"
          :counter="10"
          label="First name"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field
          class="center"
          v-model="lastname"
          :rules="nameRules"
          :counter="10"
          label="Last name"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="10">
        <v-text-field
          class="center"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-col>

      <v-col class="fil-center" cols="12" md="8">
        <v-file-input accept="image/*" label="File input"></v-file-input>
      </v-col>
      <v-btn class="cen" depressed> Normal </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.center {
  margin-left: 30%;
}
.fil-center {
  margin-left: 22%;
  width: 62%;
}
</style>