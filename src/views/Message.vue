<template>
  <div class="message">
    <div class="topbar">
      <div>
        <button class="msgTopBtn active">聊天</button>
        <button class="msgTopBtn">互动</button>
      </div>
    </div>
    <div class="searchbar">
      <div>
        <span>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconlujing"></use>
          </svg></span>
        <input type="text"
               placeholder="通过姓名或公司搜索联系人">
      </div>
    </div>
    <div class="linkman">
      <div>联系人</div>
      <button>极速处理</button>
    </div>
    <main>
      <messageCard></messageCard>
    </main>
  </div>
</template>

<script>
import messageCard from '../components/MessageCard'
export default {
  components: {
    messageCard
  },
  mounted: () => {
    let btn = document.querySelectorAll('.msgTopBtn')
    for (let index = 0; index < btn.length; index++) {
      btn[index].addEventListener('click', () => {
        let j = (index === 0 ? 1 : 0)
        btn[j].classList.remove('active')
        btn[index].classList.add('active')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  flex-direction: column;
  .topbar {
    div {
      display: inline-block;
      border: 1px solid #fff;
      border-radius: 2px;
      button {
        color: #fff;
        outline: none;
        &.active {
          background: #fff;
          color: #42b983;
        }
      }
    }
  }
  .searchbar {
    background: #fff;
    padding: 12px 20px;
    div {
      background: #efefef;
      padding: 4px;
      border-radius: 2px;
      span {
        margin-right: 10px;
      }
      input {
        background-color: #efefef;
        border: none;
        outline: none;
        width: 80%;
      }
    }
  }
  .linkman {
    background: #fff;
    display: flex;
    padding: 12px 20px;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
    button {
      border: 1px solid #c5c5c5;
      background: #fff;
      border-radius: 2px;
      color: #c5c5c5;
      outline: none;
    }
  }
}
</style>
