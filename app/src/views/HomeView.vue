<!-- eslint-disable no-unused-vars -->
<template>
  <SideBar />
  <SliderHead />
</template>

<script>

import { defineComponent } from 'vue';

// Components
import SideBar from '@/components/SideBar.vue';
import SliderHead from '@/components/SliderHead.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    SideBar,
    SliderHead
},
});
</script>
