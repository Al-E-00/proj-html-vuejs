<template>
  <div id="App">
    <InfoBanner />
    <Header />
  </div>
</template>

<script>
import InfoBanner from './components/InformationBanner.vue';
import Header from './components/TheHeader.vue';


export default {
  name: 'App',
  components: {
    Header,  InfoBanner, 
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';



</style>