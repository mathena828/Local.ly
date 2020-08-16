<template>
  <b-container id="login" class="d-flex justify-content-center mt-5">
    <b-card no-body>
      <b-card-body title="Login">
        <b-form-group label="Email">
          <b-form-input
            type="email"
            required
            placeholder="Enter your email"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input
            type="password"
            required
            placeholder="Enter your password"
          ></b-form-input>
        </b-form-group>
        <b-button
          block
          class="mt-3"
          variant="primary"
          @click="
            authenticate();
            $router.push('/account');
          "
          >Sign In</b-button
        >
        <hr />
        <p class="mt-2">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "login",
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
.card {
  min-width: 500px !important;
}
.card-title {
  font-family: "Raleway", sans-serif !important;
  font-weight: bold;
}
</style>
