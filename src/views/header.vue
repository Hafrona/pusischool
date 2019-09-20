<template>
  <div class="header">
    <router-link to="/" class="logo">
      <img src="../../public/images/logo.png" alt />
    </router-link>
    <!-- header左边区域 -->
    <div class="header-left-search">
      <!-- 点击收起左侧导航栏 -->
      <i @click="packUp"></i>
      <div class="search-input">
        <input type="text" placeholder="搜索功能/学员" v-model="searchValue" @click="panel=!panel" />
        <i></i>
        <!-- 点击搜索功能展开面板 -->
        <transition name="searchPanel">
          <div class="search-panel" v-if="panel">
            <ul>
              <li
                v-for="(item,index) in panelNav"
                :key="index"
                @click="searchPanelTrigger(index)"
                :class="{searchPanelCtive:index === panelIndex}"
              >
                <span>{{item.name}}</span>
              </li>
            </ul>
            <div class="search-panel-content">
              <div class="panel-content-label">
                <div class="label" v-for="(item,index) in panelLabel" :key="index">
                  <i>{{item.num}}</i>
                  <span class="label-name">{{item.name}}</span>
                  <span class="label-delete" v-show="panelLabelDelete">x</span>
                </div>
              </div>
              <div class="dispose">
                <button @click="redact">
                  <span>{{redactValue}}</span>
                </button>
                <button @click="disposeDelete">
                  <span>{{deleteValue}}</span>
                </button>
              </div>
            </div>
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
            <el-dropdown-item icon>
              <router-link to>我的个人资料</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>我的文件</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>我的角色权限</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>交班交款</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>业绩排行</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>我的业绩</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>新手引导</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>设置导航</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>关于</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>锁定屏幕</router-link>
            </el-dropdown-item>
            <el-dropdown-item icon>
              <router-link to>退出</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 考勤看板区 -->
      <div class="user-status">
        <i @click="rightAsideToggler"></i>
      </div>
    </div>
    <!-- 点击选择校区打开弹框 -->
    <el-dialog title="选择校区" :visible.sync="selectSchool" class="select-school">
      <el-input placeholder="按校区名称过滤"></el-input>
      <div class="select-school-content">
        <router-link to>众来达教育</router-link>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="selectSchool = false">确 定</el-button>
        <el-button @click="selectSchool = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 我的任务 -->
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
</template>
<script>
export default {
  data() {
    return {
      // 为true就收起左侧导航栏
      pack: false,
      // 搜索功能/学员
      panel: false,
      searchValue: "",
      panelNav: [
        { name: "学员", id: 1 },
        { name: "客户", id: 2 },
        { name: "班级", id: 3 }
      ],
      panelLabelData: [
        [
          { name: "萌新班", id: 1, num: 11 },
          { name: "基础版", id: 2, num: 2 },
          { name: "提高班", id: 3, num: 10 }
        ],
        [],
        []
      ],
      panelIndex: 0,
      panelLabel: [
        { name: "萌新班", id: 1, num: 11 },
        { name: "基础版", id: 2, num: 2 },
        { name: "提高班", id: 3, num: 10 }
      ],
      panelLabelDelete: false,
      panelLabelRedact: false,
      deleteValue: "删除",
      redactValue: "编辑",
      // 我的任务数据
      dialogTableVisible: false,
      assignmentData: [
        { text: "没有数据", id: "1" },
        { text: "没有数据", id: "2" },
        { text: "没有数据", id: "3" },
        { text: "没有数据", id: "4" },
        { text: "没有数据", id: "5" }
      ],
      radio: 3,
      currentPage2: 5,
      // 校区
      selectSchool: false,
      rightAside: false
    };
  },
  methods: {
    // 点击收起左侧导航栏
    packUp() {
      this.$emit("packUp", (this.pack = !this.pack));
    },
    // 搜索功能仪表盘左边学员客户班级
    searchPanelTrigger(index) {
      this.panelIndex = index;
      if (this.panelLabelData[index].length != 0) {
        this.panelLabel = this.panelLabelData[index];
      } else {
        console.log(123);
      }
    },
    // 点击删除标签
    nihao(data,index){
        console.log(data,index)
    },
    disposeDelete() {
        this.nihao(123,564)
      this.panelLabelDelete = !this.panelLabelDelete;
      if(this.redactValue === '完成'){
          this.redactValue = '编辑'
          this.panelLabelRedact = false
      }
      if (this.panelLabelDelete) {
        this.deleteValue = "完成";
      } else {
        this.deleteValue = "删除";
      }
    },
    //点击展开或收起右侧考勤看板区域
    rightAsideToggler() {
      this.$emit("rightAside", (this.rightAside = !this.rightAside));
    },
    redact() {
      this.panelLabelRedact = !this.panelLabelRedact;
      if(this.deleteValue === '完成'){
          this.deleteValue = '删除'
          this.panelLabelDelete = false
      }
      if (this.panelLabelRedact) {
        this.redactValue = "完成";
      } else {
        this.redactValue = "编辑";
      }
    },
    // 分页
    handleSizeChange() {},
    handleCurrentChange() {}
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
  // 头部左边部分
  .header-left-search {
    display: flex;
    align-items: center;
    padding-left: 20px;
    > i {
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
      > i {
        display: block;
        width: 18px;
        height: 18px;
        background-image: url("../../public/images/sousuo.png");
        background-repeat: no-repeat;
        position: absolute;
        top: 3px;
        right: 0px;
        padding-right: 5px;
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
        background-color: rgba(255, 255, 255, 0.9);
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
            position: relative;
            cursor: pointer;
            &:hover {
              background-color: #ededed;
            }
            span {
              // padding: 5px 0;
              display: block;
              width: 14px;
              font-size: 14px;
            }
          }
          .searchPanelCtive {
            color: #39f;
            &::after {
              content: " ";
              width: 2px;
              background-color: #39f;
              height: 100%;
              position: absolute;
              top: 0px;
              right: -2px;
            }
          }
        }
        .search-panel-content {
          width: 90%;
          padding: 15px;
          .panel-content-label {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 30px;
            .label {
              color: #fff;
              display: flex;
              background-color: orange;
              border-radius: 3px;
              position: relative;
              margin-right: 20px;
              cursor: pointer;
              i {
                display: block;
                width: 16px;
                height: 16px;
                background-color: #ed3f14;
                border-radius: 50%;
                font-size: 10px;
                text-align: center;
                position: absolute;
                top: -9px;
                left: -5px;
              }
              .label-name {
                display: block;
                height: 100%;
                font-size: 14px;
                padding: 5px 5px;
                box-sizing: border-box;
                font-weight: 600;
                &:hover {
                  opacity: 0.9;
                }
              }
              .label-delete {
                height: 100%;
                padding: 3px 5px;
                font-size: 14px;
                box-sizing: border-box;
                opacity: 0.7;
                &:hover {
                  opacity: 1;
                }
              }
            }
          }
          .dispose {
            font-size: 14px;
            button {
              border: 0;
              background-color: #fff;
              height: 25px;
              margin-right: 15px;
              cursor: pointer;
              &:hover {
                color: #5cadff;
                transition: all 0.5s;
              }
            }
          }
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
      // i {
      // }
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
  // 我的任务弹窗样式
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
            // td {
            // }
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
@media only screen and (max-width: 992px) {
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
</style>