<template>
  <div id="App">
    <InfoBanner />
    <Header />
    <LogisticsServices />
  </div>
</template>

<script>
import InfoBanner from './components/InformationBanner.vue';
import Header from './components/TheHeader.vue';
import LogisticsServices from './components/LogisticsServices.vue';


export default {
  name: 'App',
  components: {
    Header,
    InfoBanner,
    LogisticsServices
}
}
</script>

<style lang="scss">
@import './assets/scss/main';



</style>