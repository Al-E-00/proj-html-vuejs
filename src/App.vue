<template>
  <div id="App">
    <InfoBanner />
    <Header />
    <LogisticsServices />
    <CompanySection />
    <LogoSection />
    <LatestNewsSection />
  </div>
</template>

<script>
import InfoBanner from './components/InformationBanner.vue';
import Header from './components/TheHeader.vue';
import LogisticsServices from './components/LogisticsServices.vue';
import CompanySection from './components/CompanySection.vue';
import LogoSection from './components/LogoSection.vue';
import LatestNewsSection from './components/LatestNewsSection.vue';


export default {
  name: 'App',
  components: {
    Header,
    InfoBanner,
    LogisticsServices,
    CompanySection,
    LogoSection,
    LatestNewsSection
}
}
</script>

<style lang="scss">
@import './assets/scss/main';



</style>