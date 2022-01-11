<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import $ from 'jquery';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    // mounted階段使用jQuery($) 確保DOM已經渲染完成
    console.log($('img').attr('src'));
    // fetch('https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview')
    // .then(res => res.json())
    // .then(data => console.log(data));
  }
}



</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
