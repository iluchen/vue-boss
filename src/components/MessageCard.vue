<template>
  <div class="messageCard">
    <div class="messageContent" v-for="(item, index) in messages" :key="index">
      <div class="head">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#iconicon-test"></use>
        </svg>
      </div>
      <div class="messageBox">
        <div class="username">
          <div>
            {{item.username}}
            <span class="aboutCompany">{{item.company}}</span>
          </div>
          <div class="aboutTime">{{item.time}}</div>
        </div>
        <div class="message">
          {{item.messages}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: {
        message1: {
          username: '马云',
          company: '阿里巴巴 boss',
          time: '10:17',
          messages: '您好，请问对加入我们有兴趣吗？'
        },
        message2: {
          username: '马云',
          company: '阿里巴巴 boss',
          time: '10:17',
          messages: '您好，请问对加入我们有兴趣吗？'
        },
        message3: {
          username: '马云',
          company: '阿里巴巴 boss',
          time: '10:17',
          messages: '您好，请问对加入我们有兴趣吗？'
        },
        message4: {
          username: '马云',
          company: '阿里巴巴 boss',
          time: '10:17',
          messages: '您好，请问对加入我们有兴趣吗？'
        },
        message5: {
          username: '马云',
          company: '阿里巴巴 boss',
          time: '10:17',
          messages: '您好，请问对加入我们有兴趣吗？'
        },
        message6: {
          username: '马云',
          company: '阿里巴巴 boss',
          time: '10:17',
          messages: '您好，请问对加入我们有兴趣吗？'
        },
        message7: {
          username: '马云',
          company: '阿里巴巴 boss',
          time: '10:17',
          messages: '您好，请问对加入我们有兴趣吗？'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.messageCard {
  background: #fff;
  .messageContent {
    border-bottom: 1px solid #efefef;
    display: flex;
    padding: 20px;
    .head {
      font-size: 40px;
    }
    .messageBox {
      display: flex;
      flex: 1;
      margin-left: 10px;
      padding: 4px 0;
      flex-direction: column;
      align-items: baseline;
      .username {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        .aboutCompany, .aboutTime {
          font-size: 12px;
          color: #858585;
        }
      }
      .message {
        font-size: 14px;
      }
    }
  }
}
</style>
