<template>
  <div id="app">
    <router-view style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import axios from 'axios';
import event from './event';

export default {
  name: 'App',
  components: { },
  mounted() {
    event.$on('go', (data) => {
      if(data != null){
        if (typeof data === 'string' || data instanceof String){
          if(data != null) this.$router.push(data)
        }else{
          if(data.route != null) this.$router.push(data.route)
        }
      }
    });
  },
  methods: {
    route(path){
      if(this.$store.getters.getUser != null){
        this.$router.push(path);
      }
    },
  }
}
</script>