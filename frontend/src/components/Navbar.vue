<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Local.ly</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Services</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav v-if="this.$store.state.is_autheticated" class="ml-auto">
        <b-button size="sm" class="mx-2 my-2 my-sm-0">Logout</b-button>
        <b-nav-item-dropdown text="Profile" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">History</b-dropdown-item>
          <b-dropdown-item href="#">Inbox</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-button size="sm" class="mx-2 my-2 my-sm-0">Register</b-button>
        <b-button size="sm" class="mx-2 my-2 my-sm-0">Login</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
