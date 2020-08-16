<template>
  <b-container fluid id="search">
    <b-row class="pt-5" align-v="center" align-h="center">
      <h1>Find the best service anytime, anywhere.</h1>
    </b-row>
    <b-row class="pb-5 pt-4" align-v="center" align-h="center">
      <b-col class="p-0" cols="4">
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"
              ><b-icon icon="person-check-fill"></b-icon
            ></span>
          </b-input-group-prepend>
          <b-form-input placeholder="Service"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col class="p-0" cols="4">
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"
              ><b-icon icon="geo-alt"></b-icon
            ></span>
          </b-input-group-prepend>
          <b-form-input placeholder="Location"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col class="p-0" cols="2"
        ><b-button class="btn-block" variant="primary">Search</b-button></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>
<style scoped>
#search {
  background-color: #212fa2;
}
.form-control,
.btn,
.input-group-text {
  border-radius: 0;
}
.input-group-text {
  background-color: #f64c72;
  color: white;
  border: 0;
}
h1 {
  font-family: "Raleway", sans-serif !important;
  color: white;
}
</style>
