<template>
  <div class="home">
    <el-container>
      <el-header>
        <router-link to="/" class="logo">
          <img src="../assets/logo.png" alt />
        </router-link>
      </el-header>
      <el-container>
        <!-- 首页左侧导航栏 -->
        <el-aside width="300px">
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
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
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
                    <i class="el-icon-location"></i>
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
                    <i class="el-icon-location"></i>
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
                    <i class="el-icon-location"></i>
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
                    <i class="el-icon-location"></i>
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
                    <i class="el-icon-location"></i>
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
                    <i class="el-icon-location"></i>
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
      </el-container>

      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
  .el-header {
    height: 10%;
    padding-left: 0;
    border-bottom: 2px solid #dddddd;
    .logo {
      display: inline-block;
      width: 300px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .el-aside {
    height: 100%;
    box-shadow: 4px 4px 9px #ddd;
    z-index: 10;
    .tac {
      .title {
        height: 54px;
        padding-left: 22px;
        cursor: pointer;
        a {
          height:100%;
          display: flex;
          font-size: 18px;
          font-weight: 600;
          align-items: center;
        }
      }
    }
  }
  .el-main {
    background-color: #eff4f8;
    .el-breadcrumb {
      height: 50px;
      font-size: 18px;
      background-color: #fff;
    }
  }
  .el-footer{
    height:10%;
  }
}
</style>