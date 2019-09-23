<template>
  <div class="home">
    <el-container :class="{leftNavPutAway:selectPack}">
      <!-- 头部 -->
      <el-header>
        <headModule @packUp="PackData" @rightAside="rightAsideData" />
      </el-header>
      <!-- 内容 -->
      <el-container>
        <!-- 首页左侧导航栏 -->
        <el-aside :width="leftWidth">
          <el-row class="tac">
            <el-col :span="24">
              <div class="title" :class="{active:leftNav}" @click="leftNavWorkbench">
                <router-link to="/home/workbench">
                  <i class="el-icon-location"></i>
                  <h2>工作台</h2>
                </router-link>
              </div>
              <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="slct"
                :unique-opened="true"
                text-color="#909090"
                :router="true"
                :default-active="$route.path"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i>
                      <img src="../../public/images/zhaosheng.png" alt />
                    </i>
                    <span>招生</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/home/market">市场名单</el-menu-item>
                    <el-menu-item index="1-2">客户名单</el-menu-item>
                    <el-menu-item index="1-3">跟进情况</el-menu-item>
                    <el-menu-item index="1-4">试听管理</el-menu-item>
                    <el-menu-item index="1-5">体验课管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i>
                      <img src="../../public/images/jiaoxue.png" alt />
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
                      <img src="../../public/images/yunying.png" alt />
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
                      <img src="../../public/images/fuwu.png" alt />
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
                      <img src="../../public/images/baobiao.png" alt />
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
                      <img src="../../public/images/yingyong.png" alt />
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
                      <img src="../../public/images/xitong.png" alt />
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
          <breadcrumb />
          <router-view></router-view>
        </el-main>
        <el-aside :width="rightWidth" class="asideRight">右边</el-aside>
      </el-container>
      <!-- 底部 -->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import breadcrumb from "@/components/breadcrumb.vue";
import headModule from "@/views/header.vue";
export default {
  components: {
    // 面包屑组件
    breadcrumb,
    headModule
  },
  data() {
    return {
      // 用于判断左侧导航栏样式
      leftNav: false,
      // 我的任务数据
      assignmentData: [
        { text: "没有数据", id: "1" },
        { text: "没有数据", id: "2" },
        { text: "没有数据", id: "3" },
        { text: "没有数据", id: "4" },
        { text: "没有数据", id: "5" }
      ],

      // 判断点击收起左侧导航栏
      selectPack: false,
      selectRightAside: true,
      leftWidth: "300px",
      // 判断点击展开右侧考勤看板区
      rightWidth: "0",
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    slct() {},
    leftNavWorkbench() {
      this.leftNav = true;
    },
    // 收起左侧导航栏
    PackData(data) {
      this.selectPack = data;
      if (this.selectPack) {
        this.leftWidth = "65px";
      } else {
        this.leftWidth = "300px";
      }
    },
    //隐藏显示右侧导航栏
    rightAsideData(data) {
      this.selectRightAside = data;
      if (this.selectRightAside) {
        this.rightWidth = "300px";
      } else {
        this.rightWidth = "0";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  color: #909090;
  .el-container {
    height: 100%;
  }
  // 头部样式
  .el-header {
    padding-left: 0;
    border-bottom: 2px solid #dddddd;
  }
  // 左侧导航栏样式
  .el-aside {
    height: 100%;
    box-shadow: 4px 4px 9px #ddd;
    z-index: 10;
    transition: all 0.3s;
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
        }
      }
      .el-submenu {
        color: #909090;
        i {
          margin-right: 25px;
          padding-left: 15px;
        }
        span {
          color: #909090;
        }
      }
      // .el-menu-item.is-active{
      //   background-color: #7aa9ff;
      //   color:#fff;
      // }
    }
  }
  //右侧考勤看板样式
  .asideRight {
    height: 100%;
    box-shadow: none;
    z-index: 10;
    transition: all 0.3s;
  }
  // 内容区域
  .el-main {
    margin: 0;
    padding: 0;
    background-color: #eff4f8;
    height: 100%;
  }
  // 点击收起左侧导航栏
  .leftNavPutAway {
    .el-aside {
      transition: all 0.3s;
      .tac {
        .title {
          padding-left: 20px;
          h2 {
            display: none;
          }
        }
        .el-submenu {
          i {
            padding-left: 0;
            margin-right: 0;
          }
          span {
            display: none;
          }
          /deep/.el-submenu__icon-arrow {
            display: none;
          }
          /deep/.el-submenu__title {
            padding: 0;
          }
          .el-menu-item-group {
            display: none;
          }
        }
      }
    }
  }
  .active {
    background-color: #7aa9ff;
    color: #fff;
  }
  
}
.searchPanel-enter-active,
.searchPaneld-leave-active {
  transition: opacity 0.5s;
}
.searchPanel-enter,
.searchPanel-leave-to {
  opacity: 0;
}
@media only screen and (max-width: 992px) {
  .el-aside {
    display: none;
  }
}
</style>