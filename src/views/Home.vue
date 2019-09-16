<template>
  <div class="home">
    <el-container :class="{active:pack}">
      <!-- 头部 -->
      <el-header>
        <div class="header">
          <router-link to="/" class="logo">
            <img src="@/public/images/logo.png" alt />
          </router-link>
          <div class="header-left-search">
            <i @click="packUp"></i>
            <div class="search-input">
              <input type="text" placeholder="搜索功能/学员" v-model="searchValue" />
              <i></i>
            </div>
            <span></span>
          </div>
          <div class="header-right-user">
            <div class="user-btn">
              <div class="user-btn-sita" @click="isShow = 'true'">
                <i></i>
                <span>莆田市城厢区校区</span>
                <div class="user-trilateral"></div>
              </div>
            </div>
            <div class="user-name">
              <i>
                <img src="@/public/images/touxiang.png" alt />
              </i>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <span>蒜头王八</span>
                  <i class="user-trilateral"></i>
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
              <i @click='rightAside = !rightAside'></i>
            </div>
          </div>
          <!-- 遮罩层 -->
          <div :class="isShow?'mask':''" @click="mask"></div>
        </div>
      </el-header>
      <el-container>
        <!-- 首页左侧导航栏 -->
        <el-aside :width="width">
          <el-row class="tac">
            <el-col :span="24">
              <div class="title">
                <router-link to="/home/workbench">
                  <i class="el-icon-location"></i>
                  <h2>工作台</h2>
                </router-link>
              </div>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="slct"
                active-text-color="#fff"
                :unique-opened="true"
                :router="true"
              >
                <el-submenu index="1" class>
                  <template slot="title">
                    <i>
                      <img src="@/public/images/zhaosheng.png" alt />
                    </i>
                    <span>招生</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">市场名单</el-menu-item>
                    <el-menu-item index="1-2">客户名单</el-menu-item>
                    <el-menu-item index="1-3">跟进情况</el-menu-item>
                    <el-menu-item index="1-4">试听管理</el-menu-item>
                    <el-menu-item index="1-5">体验课管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i>
                      <img src="@/public/images/jiaoxue.png" alt />
                    </i>
                    <span>教学</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">市场名单</el-menu-item>
                    <el-menu-item index="2-2">客户名单</el-menu-item>
                    <el-menu-item index="2-3">跟进情况</el-menu-item>
                    <el-menu-item index="2-4">试听管理</el-menu-item>
                    <el-menu-item index="2-5">体验课管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i>
                      <img src="@/public/images/yunying.png" alt />
                    </i>
                    <span>运营</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">市场名单</el-menu-item>
                    <el-menu-item index="3-2">客户名单</el-menu-item>
                    <el-menu-item index="3-3">跟进情况</el-menu-item>
                    <el-menu-item index="3-4">试听管理</el-menu-item>
                    <el-menu-item index="3-5">体验课管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i>
                      <img src="@/public/images/fuwu.png" alt />
                    </i>
                    <span>服务</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1">市场名单</el-menu-item>
                    <el-menu-item index="4-2">客户名单</el-menu-item>
                    <el-menu-item index="4-3">跟进情况</el-menu-item>
                    <el-menu-item index="4-4">试听管理</el-menu-item>
                    <el-menu-item index="4-5">体验课管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i>
                      <img src="@/public/images/baobiao.png" alt />
                    </i>
                    <span>报表</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="5-1">市场名单</el-menu-item>
                    <el-menu-item index="5-2">客户名单</el-menu-item>
                    <el-menu-item index="5-3">跟进情况</el-menu-item>
                    <el-menu-item index="5-4">试听管理</el-menu-item>
                    <el-menu-item index="5-5">体验课管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                  <template slot="title">
                    <i>
                      <img src="@/public/images/yingyong.png" alt />
                    </i>
                    <span>应用</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="6-1">市场名单</el-menu-item>
                    <el-menu-item index="6-2">客户名单</el-menu-item>
                    <el-menu-item index="6-3">跟进情况</el-menu-item>
                    <el-menu-item index="6-4">试听管理</el-menu-item>
                    <el-menu-item index="6-5">体验课管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="7">
                  <template slot="title">
                    <i>
                      <img src="@/public/images/xitong.png" alt />
                    </i>
                    <span>系统</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="7-1">市场名单</el-menu-item>
                    <el-menu-item index="7-2">客户名单</el-menu-item>
                    <el-menu-item index="7-3">跟进情况</el-menu-item>
                    <el-menu-item index="7-4">试听管理</el-menu-item>
                    <el-menu-item index="7-5">体验课管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 首页内容区域 -->
        <el-main>
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>工作台</el-breadcrumb-item>
            <el-breadcrumb-item>总览</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
        <el-aside v-show='rightAside'>
          右边
        </el-aside>
      </el-container>
      <!-- 底部 -->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pack: "",
      searchValue: "",
      isShow: false,
      pack: false,
      width: "300px",
      rightAside:false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    slct(key, keyPath) {
      console.log(key, keyPath);
    },
    packIndex(data) {
      this.pack = data;
    },
    mask() {
      this.isShow = !this.isShow;
    },
    packUp() {
      this.pack = !this.pack;
      if (this.pack) {
        this.width = "50px";
      } else {
        this.width = "300px";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  // overflow: hidden;
  .el-container {
    height: 100%;
  }
  // 头部样式
  .el-header {
    // height: 10%;
    padding-left: 0;
    border-bottom: 2px solid #dddddd;
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
      .header-left-search {
        display: flex;
        align-items: center;
        padding-left: 20px;
        i {
          cursor: pointer;
          display: inline-block;
          width: 24px;
          height: 24px;
          background-image: url("../public/images/daohanglan.png");
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
            background-image: url("../public/images/sousuo.png");
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
          background-image: url("../public/images/tongzhi.png");
        }
      }
      .header-right-user {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        .user-btn {
          margin-left: 35px;
          width: 178px;
          height: 26px;
          font-size: 12px;
          padding-right: 25px;
          .user-btn-sita {
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
              background-image: url("../public/images/dingwei.png");
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
            .user-trilateral {
              position: absolute;
              top: 3px;
              right: -20px;
            }
          }
        }
        .user-status {
          margin-left: 25px;
          i {
            cursor: pointer;
            display: block;
            width: 24px;
            height: 24px;
            background-image: url("../public/images/youce.png");
          }
        }
      }
      .user-trilateral {
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
  }
  // 左侧导航栏样式
  .el-aside {
    height: 100%;
    box-shadow: 4px 4px 9px #ddd;
    z-index: 10;
    .tac {
      .title {
        height: 54px;
        padding-left: 35px;
        cursor: pointer;
        a {
          height: 100%;
          display: flex;
          font-size: 18px;
          font-weight: 600;
          align-items: center;
        }
        h2 {
          padding-left: 27px;
          color: inherit;
        }
      }
      .el-submenu {
        i {
          margin-right: 25px;
          padding-left: 15px;
          color: inherit;
        }
      }
    }
  }
  // 内容区域
  .el-main {
    margin: 0;
    padding: 0;
    background-color: #eff4f8;
    height: 100%;
    .el-breadcrumb {
      height: 50px;
      font-size: 18px;
      margin-bottom: 0;
      background-color: #fff;
      padding-left: 30px;
    }
  }
  .el-footer {
    // height:10%;
  }
  .active {
    /deep/.el-aside {
      width: 100px;
    }
  }
}
@media only screen  and (max-width: 992px) {
  .el-aside {
    display: none;
  }
  .el-header {
    .header {
      position: relative;
      .logo {
        position: absolute;
        top: 0px;
        left: 35%;
      }
      .logo::after{
        display: none;
      }
      .header-right-user{
        padding-right: 0 !important;
        .user-btn{
          margin-left: 0 !important;
          padding-right: 0 !important;
        }
      }
      .user-status {
        display: none;
      }
      .user-name {
        .el-dropdown-link {
          span {
            display: none;
          }
         
        }
      }
    }
  }
}
</style>