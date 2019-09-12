<template>
  <div class="header">
    <router-link to="/" class="logo">
      <img src="@/assets/logo.png" alt />
    </router-link>
    <div class="headerLeft-search">
      <i></i>
      <!-- <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input> -->
      <div class="search-input">
        <input type="text" placeholder="搜索功能/学员" v-model="input2" />
        <i></i>
      </div>
      <span></span>
    </div>
    <div class="headerRight-user">
      <div class="user-input">
        <div class="userInput" @click="isShow = 'true'">
          <i></i>
          <span>莆田市城厢区校区</span>
          <div class="bodr"></div>
        </div>
      </div>
      <div class="user-name">
        <i>
          <img src="@/assets/images/touxiang.png" alt />
        </i>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            蒜头王八
            <div class="bodr"></div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="user-status">
        <i></i>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div :class="isShow?'mask':''" @click="mask"></div>
    <!-- <div class="school">
      <div class="school-title">
        <h2>选择校区</h2>
        <i></i>
      </div>
      <div class="school-input">
        <input type='text' placeholder="按校区名称过滤" />
        <i></i>
      </div>
      <div class="school-button">

      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      input2: "",
      isShow: false
    };
  },
  methods: {
    open1() {
      this.$notify({
        title: "自定义位置",
        message: "右上角弹出的消息"
      });
    },
    mask() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .logo {
    width: 380px;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 35px;
  }
  .logo::after {
    content: " ";
    width: 300px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    bottom: -2px;
    left: 0px;
  }
  .headerLeft-search {
    display: flex;
    align-items: center;
    padding-left: 20px;
    i {
      cursor: pointer;
      display: inline-block;
      width: 24px;
      height: 24px;
      background-image: url("../assets/images/daohanglan.png");
    }
    .search-input {
      height: 26px;
      width: 178px;
      position: relative;
      margin: 0 15px;
      input {
        height: 100%;
        width: 100%;
        border: 1px solid #bfbfbf;
        border-radius: 4px;
        background-color: #fff;
        padding: 5px;
        box-sizing: border-box;
      }
      i {
        cursor: pointer;
        background-image: url("../assets/images/sousuo.png");
        background-repeat: no-repeat;
        position: absolute;
        top: 3px;
        right: 0px;
      }
    }
    span {
      cursor: pointer;
      display: inline-block;
      width: 24px;
      height: 24px;
      background-image: url("../assets/images/tongzhi.png");
    }
  }
  .headerRight-user {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    .user-input {
      margin-left: 35px;
      width: 178px;
      height: 26px;
      font-size: 12px;
      padding-right: 25px;
      .userInput {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border: 1px solid #bfbfbf;
        border-radius: 4px;
        position: relative;
        &:hover {
          border: 1px solid #7aa9ff;
          box-shadow: 0px 0px 5px skyblue;
        }
        i {
          display: block;
          width: 18px;
          height: 18px;
          background-image: url("../assets/images/dingwei.png");
          background-repeat: no-repeat;
          position: absolute;
          top: 5px;
          left: 10px;
        }
        span {
          color: #7d7d7d;
        }
      }
    }
    .user-name {
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 15px;
      cursor: pointer;
      i {
      }
      span {
        margin-left: 5px;
      }
      .bodr {
        position: absolute;
        top: 3px;
        right: -20px;
      }
    }
    .user-status {
      margin-left: 25px;
      i{
        cursor: pointer;
        display: block;
        width: 24px;
        height: 24px;
        background-image: url('../assets/images/youce.png');
      }
    }
  }
  .bodr {
    width: 0;
    height: 0;
    border: 8px solid red;
    border-color: #7e818f transparent transparent transparent;
    position: absolute;
    top: 10px;
    right: 7px;
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.3;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
  }
}
</style>