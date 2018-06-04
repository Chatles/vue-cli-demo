<template>
  <h1>
    Hello, home!!
    id: {{user.id}}
    name: {{user.name}}
  </h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user']),
  },
};
</script>
