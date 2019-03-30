<template>
  <div>
    <div class="card" v-for="(card, index) in cards" :key="index">
      <div class="cardCompany">
        <div class="logo">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#icontengxun"></use>
          </svg>
        </div>
        <div class="detail">
          <div class="companyName">{{card.company}}</div>
          <div class="companyPlace">{{card.place}}</div>
        </div>
      </div>
      <div class="cardlabel">
        <span>{{card.states}}</span>
        <span>{{card.persons}}</span>
        <span>{{card.business}}</span>
      </div>
      <div class="cardMore">
        <div class="hotJob">
          热招：{{card.jobname}}等{{card.numbers}}个职位
          <span>></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pic: ['#icondianxin', '#iconalibaba-copy-copy', '#icontengxun'],
      cards: {
        card: {
          place: '杭州 余杭 西溪',
          company: '腾讯',
          states: '已上市',
          persons: '10000-人',
          business: '互联网',
          jobname: '前端工程师',
          numbers: '1988'
        },
        card2: {
          place: '杭州 余杭 西溪',
          company: '阿里巴巴',
          states: '已上市',
          persons: '1000-5000人',
          business: '互联网',
          jobname: '前端工程师',
          numbers: '1988'
        },
        card3: {
          place: '杭州 余杭 西溪',
          company: '阿里巴巴',
          states: '已上市',
          persons: '1000-5000人',
          business: '互联网',
          jobname: '前端工程师',
          numbers: '1988'
        },
        card4: {
          place: '杭州 余杭 西溪',
          company: '华为',
          states: '已上市',
          persons: '1000-5000人',
          business: '互联网',
          jobname: '前端工程师',
          numbers: '1988'
        },
        card5: {
          place: '杭州 余杭 西溪',
          company: '阿里巴巴',
          states: '已上市',
          persons: '1000-5000人',
          business: '互联网',
          jobname: '前端工程师',
          numbers: '1988'
        },
        card6: {
          place: '杭州 余杭 西溪',
          company: '阿里巴巴',
          states: '已上市',
          persons: '1000-5000人',
          business: '互联网',
          jobname: '前端工程师',
          numbers: '1988'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 6px;
  background: #fff;
  padding: 10px 22px;
  .cardCompany {
    display: flex;
    .logo {
      font-size: 38px;
      padding: 0 10px;
      // background: #ccc;
    }
    .detail {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: center;
      margin-left: 6px;
      .companyName {
        font-weight: bold;
        font-size: 16px;
      }
      .companyPlace {
        font-size: 14px;
      }
    }
  }
  .cardlabel {
    display: flex;
    font-size: 10px;
    margin: 6px 0;
    span {
      display: inline-block;
      padding: 2px 6px;
      background: #f1f1f1;
      margin-right: 12px;
      border-radius: 2px;
      color: #a0a0a0;
    }
  }
  .cardMore {
    border-top: 1px solid #efefef;
    padding: 6px;
    .hotJob {
      text-align: left;
      font-size: 12px;
    }
  }
}
</style>
