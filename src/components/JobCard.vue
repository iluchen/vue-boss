<template>
  <div>
    <div class="card"
         v-for="(card, index) in cards"
         :key="index">
      <div class="cardjob">
        <div class="aboutjob">
          <div class="jobname">{{card.jobname}}</div>
          <div class="company">{{card.company}} {{card.states}}</div>
        </div>
        <div class="salary">{{card.salary}}</div>
      </div>
      <div class="cardlabel">
        <span>{{card.place}}</span>
        <span>{{card.year}}</span>
        <span>{{card.record}}</span>
      </div>
      <div class="carduser">
        <div class="username">{{card.username}}</div> ·
        <div class="post">{{card.post}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: {
        card: {
          jobname: '前端工程师',
          company: '阿里巴巴',
          states: '已上市',
          salary: '15K-20K',
          place: '杭州 余杭 西溪',
          year: '3-5年',
          record: '本科',
          username: '卢晨',
          post: '招聘经理'
        },
        card2: {
          jobname: '全栈工程师',
          company: '腾讯',
          states: '已上市',
          salary: '12K-20K',
          place: '杭州',
          year: '3-5年',
          record: '本科',
          username: '周杰伦',
          post: 'HR'
        },
        card3: {
          jobname: '移动开发',
          company: '腾讯',
          states: '已上市',
          salary: '15K-25K',
          place: '杭州',
          year: '3-5年',
          record: '本科',
          username: '美女',
          post: '前端架构师'
        },
        card4: {
          jobname: '前端工程师',
          company: '腾讯',
          states: '已上市',
          salary: '12K-18K',
          place: '杭州',
          year: '3-5年',
          record: '本科',
          username: '帅哥',
          post: '开发主管'
        },
        card5: {
          jobname: '全栈工程师',
          company: '腾讯',
          states: '已上市',
          salary: '15K-15K',
          place: '杭州',
          year: '3-5年',
          record: '本科',
          username: '周杰伦',
          post: '招聘经理'
        },
        card6: {
          jobname: '全栈工程师',
          company: '腾讯',
          states: '已上市',
          salary: '15K-15K',
          place: '杭州',
          year: '3-5年',
          record: '本科',
          username: '周杰伦',
          post: '招聘经理'
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
  .cardjob {
    display: flex;
    justify-content: space-between;
    .aboutjob {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      .jobname {
        font-weight: bold;
      }
      .company {
        font-size: 14px;
      }
    }
    .salary {
      color: #42b983;
      font-size: 14px;
      font-weight: bold;
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
  .carduser {
    display: flex;
    div {
      font-size: 12px;
      padding: 0 6px;
    }
  }
}
</style>
