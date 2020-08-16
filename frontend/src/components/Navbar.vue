<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand>Local.ly</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="#">Services</b-nav-item>
        <b-nav-item href="#">Jobs</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="this.$store.state.is_authenticated" class="ml-auto">
        <b-nav-item-dropdown text="Profile">
          <b-dropdown-item href="/account"
            ><b-icon icon="person-fill"></b-icon> Account</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><b-icon icon="clock-history"></b-icon> History</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><b-icon icon="inbox-fill"></b-icon> Inbox</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><b-icon icon="tools"></b-icon> Settings</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-button
          size="sm"
          class="mx-2 my-2"
          variant="primary"
          @click="authenticate()"
          >Logout</b-button
        >
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-button
          size="sm"
          class="mx-2 my-2"
          variant="primary"
          @click="$router.push('/register')"
          >Register</b-button
        >
        <b-button
          size="sm"
          class="mx-2 my-2"
          variant="outline-primary"
          @click="$router.push('/login')"
          >Login</b-button
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    authenticate() {
      this.$store.dispatch("authenticate");
    },
  },
};
</script>

<style scoped>
.navbar > .navbar-brand {
  font-family: "Raleway", sans-serif !important;
  font-weight: bold;
}

.navbar-nav .nav-item.active .nav-link,
.navbar-nav .nav-item:hover .nav-link {
  color: white;
}
</style>
