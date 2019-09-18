<template>
  <div class="home">
    <el-container :class="{leftNavPutAway:pack}">
      <!-- 头部 -->
      <el-header>
        <div class="header">
          <router-link to="/" class="logo">
            <img src="../../public/images/logo.png" alt />
          </router-link>
          <!-- header左边区域 -->
          <div class="header-left-search">
            <i @click="packUp"></i>
            <div class="search-input">
              <input type="text" placeholder="搜索功能/学员" v-model="searchValue" @click="panel=!panel" />
              <i></i>
              <!-- 点击搜索功能展开面板 -->
              <transition name='searchPanel'>
                <div class="search-panel" v-if="panel">
                  <ul>
                    <li>
                      <span>学</span>
                      <span>员</span>
                    </li>
                    <li>
                      <span>客</span>
                      <span>户</span>
                    </li>
                    <li>
                      <span>班</span>
                      <span>级</span>
                    </li>
                  </ul>
                  <div class="search-panel-content">你好</div>
                </div>
              </transition>
              <!-- 搜索功能展开之后的遮罩层 -->
              <div class="search-mask" v-if="panel" @click="panel = false"></div>
            </div>
            <span class="search-assignment" @click="dialogTableVisible = true"></span>
          </div>
          <!-- header右边区域 -->
          <div class="header-right-user">
            <!-- 选择校区 -->
            <div class="user-select">
              <div class="user-select-btn" @click="selectSchool = true">
                <i></i>
                <span>莆田市城厢区校区</span>
                <div class="user-trilateral"></div>
              </div>
            </div>
            <!-- 用户名 -->
            <div class="user-name">
              <i>
                <img src="../../public/images/touxiang.png" alt />
              </i>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <span>蒜头王八</span>
                  <i class="user-trilateral"></i>
                </span>
                <!-- 用户状态，个人信息 -->
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon><router-link to="">我的个人资料</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">我的文件</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">我的角色权限</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">交班交款</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">业绩排行</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">我的业绩</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">新手引导</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">设置导航</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">关于</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">锁定屏幕</router-link></el-dropdown-item>
                  <el-dropdown-item icon><router-link to="">退出</router-link></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <!-- 考勤看板区 -->
            <div class="user-status">
              <i @click="rightAside = !rightAside"></i>
            </div>
          </div>
          <!-- 点击选择校区打开弹框 -->
          <el-dialog title="选择校区" :visible.sync="selectSchool" class="select-school">
            <el-input placeholder="按校区名称过滤"></el-input>
            <div class="select-school-content">
              <router-link to="">众来达教育</router-link>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="selectSchool = false">确 定</el-button>
              <el-button @click="selectSchool = false">取 消</el-button>
            </div>
          </el-dialog>
          <!-- 点击铃铛打开我的任务 -->
          <el-dialog title="我的任务" :visible.sync="dialogTableVisible" class="assignment">
            <el-radio-group v-model="radio">
              <el-radio :label="3">今日待办</el-radio>
              <el-radio :label="6">未来待办</el-radio>
              <el-radio :label="9">过期待办</el-radio>
              <el-radio :label="12">已办</el-radio>
            </el-radio-group>
            <div class="assignment-from">
              <table class="assignment-table">
                <thead class="assignment-table-thead">
                  <tr>
                    <th>服务对象</th>
                    <th>服务类型</th>
                    <th>截止时间</th>
                    <th>回访来源</th>
                    <th>备注</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody class="assignment-table-tbody">
                  <tr v-for="(item,index) in assignmentData" :key="index">
                    <td>{{item.text}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 分页 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage2"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="10"
              layout="total,sizes, prev, pager, next"
              :total="20"
            ></el-pagination>
          </el-dialog>
        </div>
      </el-header>
      <!-- 内容 -->
      <el-container>
        <!-- 首页左侧导航栏 -->
        <el-aside :width="width">
          <el-row class="tac">
            <el-col :span="24">
              <div class="title" :class="{active:leftNav}" @click="leftNavWorkbench">
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
                text-color="#909090"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i>
                      <img src="../../public/images/zhaosheng.png" alt />
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
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>工作台</el-breadcrumb-item>
            <el-breadcrumb-item>总览</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
        <transition name="asideRight">
          <el-aside v-show="rightAside">右边</el-aside>
        </transition>
      </el-container>
      <!-- 底部 -->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      // 判断搜索功能
      panel: false,
      // 用于判断左侧导航栏
      leftNav: false,
      // 我的任务
      radio: 3,
      // 总条数
      pageNumber: 10,
      // 一页显示条数
      pageSize: 5,
      // 我的任务数据
      assignmentData: [
        { text: "没有数据", id: "1" },
        { text: "没有数据", id: "2" },
        { text: "没有数据", id: "3" },
        { text: "没有数据", id: "4" },
        { text: "没有数据", id: "5" }
      ],
      // 搜索功能/学员数据绑定
      searchValue: "",
      // 判断点击收起左侧导航栏
      pack: false,
      width: "300px",
      // 判断点击展开右侧考勤看板区
      rightAside: false,
      // 我的任务
      dialogTableVisible: false,
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      selectSchool: false,
      currentPage2: 5
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
    // 点击收起左侧导航栏
    packUp() {
      this.pack = !this.pack;
      if (this.pack) {
        this.width = "65px";
      } else {
        this.width = "300px";
      }
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    leftNavWorkbench() {
      this.leftNav = true;
    },
    // 搜索功能展开
    searchInputFocus() {}
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
      // 头部左边部分
      .header-left-search {
        display: flex;
        align-items: center;
        padding-left: 20px;
        i {
          cursor: pointer;
          display: inline-block;
          width: 24px;
          height: 24px;
          background-image: url("../../public/images/daohanglan.png");
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
            background-image: url("../../public/images/sousuo.png");
            background-repeat: no-repeat;
            position: absolute;
            top: 3px;
            right: 0px;
          }
          // 点击搜索展开仪表盘
          .search-panel {
            width: 450px;
            height: 265px;
            z-index: 1200;
            position: absolute;
            top: 35px;
            left: 0px;
            box-shadow: 0px 1px 5px #999;
            display: flex;
            background-color: rgba(255,255,255,.9);
            ul {
              width: 10%;
              border-right: 1px solid #eee;
              background-color: #fff;
              li {
                display: flex;
                height: 33.3%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                span {
                  padding: 5px 0;
                }
              }
            }
            .search-panel-content {
              width: 90%;
              padding:15px;
            }
          }
          .search-mask {
            width: 100vw;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
          }
        }
        .search-assignment {
          cursor: pointer;
          display: inline-block;
          width: 24px;
          height: 24px;
          background-image: url("../../public/images/tongzhi.png");
        }
      }
      // 右边用户部分
      .header-right-user {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        .user-select {
          margin-left: 35px;
          width: 178px;
          height: 26px;
          font-size: 12px;
          padding-right: 25px;
          .user-select-btn {
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
              background-image: url("../../public/images/dingwei.png");
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
            background-image: url("../../public/images/youce.png");
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
      // 我的任务
      .assignment {
        /deep/.el-dialog__header {
          border-bottom: 1px solid #e5e5e5;
          span {
            font-size: 16px;
          }
        }
        /deep/.el-dialog {
          width: 700px;
          position: absolute;
          top: 0px;
          left: 30%;
        }
        .el-radio-group {
          margin-bottom: 10px;
        }
        .assignment-from {
          .assignment-table {
            width: 100%;
            .assignment-table-thead {
              display: block;
              height: 40px;
              background-color: #eff4f8;
              line-height: 40px;
              border-radius: 4px;
              font-size: 12px;
              tr {
                display: flex;

                th {
                  flex: 2;
                  &:nth-child(6) {
                    flex: 4;
                    text-align: right;
                    padding-right: 30px;
                  }
                }
              }
            }
            .assignment-table-tbody {
              tr {
                height: 40px;
                border-bottom: 1px solid #e5e5e5;
                text-align: center;
                line-height: 40px;
                td {
                }
              }
            }
          }
        }
        // 分页
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          padding: 10px 0;
        }
      }
    }
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
  // 搜索校区
  /deep/.el-dialog {
    float: right;
    width: 250px;
    .select-school-content {
      height: 50px;
      padding-top:5px;
      box-sizing: border-box;
      a{
        display:block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        padding-left: 5px;
      }
    }
    .el-dialog__headerbtn{
      position: absolute;
      top:12px;
      right:10px;
    }
    .el-input__inner {
      height: 30px;
    }
    .el-dialog__header {
      padding: 10px 5px;
      span{
        font-size: 14px;
      }
    }
    .el-dialog__body {
      padding: 10px 5px 0 5px;
    }
    .el-dialog__footer{
      padding:10px 5px;
      button{
        width: 46px;
        height: 28px;
        padding:0;
      }
    }
  }
}
.searchPanel-enter-active, .searchPaneld-leave-active {
  transition: opacity .5s;
}
.searchPanel-enter, .searchPanel-leave-to{
  opacity: 0;
}
@media only screen and (max-width: 992px) {
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
      .logo::after {
        display: none;
      }
      .header-right-user {
        padding-right: 0 !important;
        .user-select {
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