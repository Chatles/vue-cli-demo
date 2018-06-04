<template>
  <div>
    <router-link to="/">Go to vue reference</router-link>
    <h1>
      Hello, home!!
      id: {{user.id}}
      name: {{user.name}}
    </h1>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user']),
  },
};
</script>
