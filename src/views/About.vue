<template>
  <div class="about">
    <div class="topbar">
      我的
    </div>
    <main>
      <!-- 数据啥的应该都丢在vue对象里，但是目前来说只写了静态页面就直接丢这了，后续完善 -->
      <div class="userInfo">
        <div class="baseInfo">
          <div class="username">卢晨</div>
          <div class="index">我的主页></div>
        </div>
        <div class="headimg">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconicon-test"></use>
          </svg>
        </div>
      </div>
      <div class="card">
        <div class="aboutMsg">
          <div class="item">
            <div>11</div>
            <div class="states">沟通过</div>
          </div>
          <div class="item">
            <div>11</div>
            <div class="states">面试</div>
          </div>
          <div class="item">
            <div>11</div>
            <div class="states">已投递</div>
          </div>
          <div class="item">
            <div>11</div>
            <div class="states">感兴趣</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="aboutMe">
          <div>我的微简历</div>
          <div>附件简历</div>
          <div>求职管理意向</div>
          <div>提升简历排名</div>
          <div>牛人问答</div>
          <div>钱包</div>
          <div>隐私设置</div>
        </div>
      </div>
      <div class="card">
        <div class="more">
          <div>帮助与反馈</div>
          <div>首都网警</div>
        </div>
      </div>
      <div>
        <div>客服电话 0571-83838383</div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: auto;
  }
}
.userInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #42b983;
  color: #fff;
  .baseInfo {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    .username {
      font-size: 32px;
    }
    .index {
      font-size: 14px;
    }
  }
  .headimg {
    font-size: 50px;
  }
}
.card {
  margin-bottom: 6px;
  background: #fff;
  padding: 10px 22px;
  .aboutMe {
    display: flex;
    flex-direction: column;
    margin: -10px 0;
    div {
      padding: 16px 0;
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #efefef;
    }
  }
  .more {
    display: flex;
    flex-direction: column;
    margin: -10px 0;
    div {
      padding: 16px 0;
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #efefef;
    }
  }
}
.aboutMsg {
  display: flex;
  .item {
    flex: 1;
    .states {
      font-size: 12px;
    }
  }
}
</style>
