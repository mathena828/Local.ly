<template>
  <b-container
    fluid
    id="register"
    class="d-flex align-items-center justify-content-center"
  >
    <b-card no-body class="mb-5">
      <b-row no-gutters>
        <b-col lg="6">
          <b-card-img
            :src="require(`../assets/images/artisan.jpg`)"
          ></b-card-img>
        </b-col>
        <b-col lg="6">
          <b-card-body title="Register">
            <b-form-group label="Name">
              <b-row>
                <b-col
                  ><b-form-input
                    type="text"
                    required
                    placeholder="First Name"
                  ></b-form-input
                ></b-col>
                <b-col
                  ><b-form-input
                    type="text"
                    required
                    placeholder="Last Name"
                  ></b-form-input
                ></b-col>
              </b-row>
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input
                type="email"
                required
                placeholder="name@example.com"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Mobile Number">
              <b-input-group prepend="+63">
                <b-form-input required placeholder="000000000"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group label="Password">
              <b-form-input
                type="password"
                required
                placeholder="At least 8 characters"
              ></b-form-input>
            </b-form-group>
            <b-form-checkbox
              >I agree to the <a href="#">Terms of Service</a> and
              <a href="#">Privacy Policy</a>.</b-form-checkbox
            >
            <b-button
              block
              class="mt-3"
              variant="primary"
              @click="
                authenticate();
                $router.push('/account');
              "
              >Sign Up</b-button
            >
            <hr />
            <p class="mt-2">
              Already have an account? <a href="/login">Sign In</a>
            </p>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "register",
  data() {
    return {};
  },
  methods: {
    authenticate() {
      this.$store.dispatch("authenticate");
    },
  },
};
</script>
<style scoped>
#register {
  background-color: #242583 !important;
  position: fixed;
  overflow-y: scroll;
  height: 100%;
}
.card {
  max-width: 860px !important;
  border: 1px solid white;
}
.card-title {
  font-family: "Raleway", sans-serif !important;
  font-weight: bold;
}
</style>
