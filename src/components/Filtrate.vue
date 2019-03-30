<template>
  <div class="filtrate">
    <a herf="#"
       v-for="(item, index) in tab"
       :key="index">
      {{item}}
    </a>
  </div>
</template>

<script>
import store from '../store.js'

export default {
  data () {
    return {
      tab: [],
      tab1: ['推荐', '杭州', '公司', '要求'],
      tab2: ['融资', '规模', '行业']
    }
  },
  mounted () {
    let tabs = 'tab' + store.state.currentTab
    this.tab = this[tabs]
  },
  computed: {
    // store.currentTab =
  }
}
</script>

<style lang="scss" scoped>
.filtrate {
  display: flex;
  padding: 10px 0;
  background: #fff;
  border-bottom: 1px solid #efefef;
  a {
    color: #757575;
    font-size: 12px;
    flex: 1;
    border-right: 1px solid #efefef;
    &:nth-last-child(1) {
      border: none;
    }
  }
}
</style>
