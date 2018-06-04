<template>
  <div>
    <h1>login in view</h1>
    <button @click="login">
      <h1>sign in</h1>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    login() {
      this.$store.dispatch('LOGIN', {id: 'testid', name: 'testname'}).then(() => {
        this.$router.push({ name: 'home' });
      });
    },
  },
};
</script>
