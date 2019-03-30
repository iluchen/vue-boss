<template>
  <div id="app">
    <router-view />
    <footer>
      <div id="nav">
        <router-link to="/">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconzhiweicopy"></use>
          </svg>
          <div class="navTitle">职位</div>
        </router-link>
        <router-link to="/company">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icongongsi1"></use>
          </svg>
          <div class="navTitle">公司</div>
        </router-link>
        <router-link to="/message">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconxiaoxi"></use>
          </svg>
          <div class="navTitle">消息</div>
        </router-link>
        <router-link to="/about"><svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconMy"></use>
          </svg>
          <div class="navTitle">我的</div>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
footer {
  background: #fff;
  border-top: solid #ccc 1px;
}
#nav {
  display: flex;
  padding: 4px 16px;
  a {
    flex: 1;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    svg {
      font-size: 30px;
    }
    .navTitle {
      font-size: 12px;
      font-weight: 200;
    }
  }
}
.topbar {
  padding: 16px 26px;
  background: #42b983;
  color: #ffffff;
}
</style>
