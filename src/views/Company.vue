<template>
  <div class="companyView">
    <div class="topbar">
      公司
      <router-link to="/search">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#iconlujing"></use>
        </svg>
      </router-link>
    </div>
    <filtrate></filtrate>
    <router-view />
    <main>
      <companyCard></companyCard>
    </main>
  </div>
</template>

<script>
import filtrate from '../components/Filtrate'
import companyCard from '../components/CompanyCard'
import store from '../store.js'

export default {
  components: {
    filtrate,
    companyCard
  },
  data () {
    return {
      currentTab: 2
    }
  },
  created: () => {
    store.state.currentTab = 2
  }
}
</script>

<style lang="scss" scoped>
.companyView {
  display: flex;
  flex-direction: column;
  .topbar {
    .icon {
      float: right;
      color: #ffffff;
      position: relative;
      top: 2px;
    }
  }
}
</style>
