<template>
  <div class="jobview">
    <div class="topbar">
      <div class="jobbar">
        <div class="intention">{{intention}}</div>
        <div class="tool">
          <router-link to="/search">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconhao"></use>
            </svg>
          </router-link> |
          <router-link to="/search">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconlujing"></use>
            </svg>
          </router-link>
        </div>
      </div>
      <router-view />
    </div>
    <filtrate></filtrate>
    <main>
      <jobCard></jobCard>
    </main>
  </div>
</template>

<script>
import filtrate from '../components/Filtrate'
import jobCard from '../components/JobCard'
import store from '../store.js'

export default {
  components: {
    filtrate,
    jobCard
  },
  data () {
    return {
      intention: '前端'
    }
  },
  created () {
    store.state.currentTab = 1
  }
}
</script>

<style lang="scss">
.jobview {
  display: flex;
  flex-direction: column;
}
.topbar {
  .jobbar {
    justify-content: space-between;
    display: flex;
    .tool {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        text-decoration: none;
        padding: 0 6px;
        color: #fff;
      }
    }
  }
}
main {
  overflow: auto;
  flex: 1;
}
</style>
