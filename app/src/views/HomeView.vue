<!-- eslint-disable no-unused-vars -->
<template>
  <SideBar />
  <h1>Koala</h1>
</template>

<script>

import { defineComponent } from 'vue';

// Components
import SideBar from '@/components/SideBar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    SideBar
},
});
</script>
