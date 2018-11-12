<template>
  <div id="app">
    <fs-header-section></fs-header-section>
    <router-view></router-view>
    <fs-footer-section></fs-footer-section>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import fsHeaderSection from './components/common/fs-header-section/fs-header-section.vue';
import fsFooterSection from './components/common/fs-footer-section/fs-footer-section.vue'

export default {
  name: 'app',
  components: {
    fsHeaderSection,
    fsFooterSection
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  margin: -8px;
}
.fs-flex-grow {
  flex-grow: 1;
}
</style>
