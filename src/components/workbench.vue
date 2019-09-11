<template>
  <div class="main">
    <!-- 常用导航栏 -->
    <div class="frequently">
      <div class="frequentlyNav" v-for="(item,index) in nav" :key="index">
        <img :src="item.img" alt />
        <div class="frequentlyNav-text">{{item.navtext}}</div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="notice">
      <i>喇叭</i>
      <div class="noticetext">
        <span>暂无公告</span>
      </div>
      <span>+</span>
    </div>
    <!-- 预警 -->
    <earlywarning/>
    <!-- 提醒部分 -->
    <remind/>
  </div>
</template>
<script>
import remind from './workbench/remind.vue'
import earlywarning from './workbench/earlyWarning.vue'
export default {
  components:{
    remind,
    earlywarning
  },
  data() {
    return {
      nav: [
        {
          navtext: "咨询登记",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 1
        },
        {
          navtext: "客户登记",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 2
        },
        {
          navtext: "新生报到",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 3
        },
        {
          navtext: "老生缴费",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 4
        },
        {
          navtext: "考勤",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 5
        },
        {
          navtext: "结转",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 6
        },
        {
          navtext: "退费",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 7
        },
        {
          navtext: "请假",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 8
        },
        {
          navtext: "发短信",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 9
        },
        {
          navtext: "发微信",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 10
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.main {
  height:100%;
  padding: 20px 20px 0;
  .frequently {
    width: 100%;
    background-color: #fff;
    display: flex;
    padding: 15px 0;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 12px;
    .frequentlyNav {
      flex: 1;
      text-align: center;
      img {
        margin-bottom: 10px;
      }
    }
  }
  .notice {
    width: 100%;
    background-color: #fff;
    display: flex;
    height: 40px;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    i {
      display: block;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
      margin-right: 15px;
    }
    > span {
      position: absolute;
      top: 13px;
      right: 20px;
    }
    .noticetext {
      width: 50%;
      font-size: 12px;
    }
  }
}
</style>