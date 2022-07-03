<template>
  <div id="App">
    <InfoBanner />
    <Header />
    <LogisticsServices />
    <CompanySection />
  </div>
</template>

<script>
import InfoBanner from './components/InformationBanner.vue';
import Header from './components/TheHeader.vue';
import LogisticsServices from './components/LogisticsServices.vue';
import CompanySection from './components/CompanySection.vue';


export default {
  name: 'App',
  components: {
    Header,
    InfoBanner,
    LogisticsServices,
    CompanySection
}
}
</script>

<style lang="scss">
@import './assets/scss/main';



</style>