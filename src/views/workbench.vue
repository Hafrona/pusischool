<template>
  <div class="main">
    <!-- 常用导航栏 -->
    <div class="frequently">
      <div class="frequently-nav" v-for="(item,index) in nav" :key="index">
        <div class="frequently-nav-img" @mouseenter="yiru(index)" @mouseleave="yichu()">
          <transition name="miniimg">
            <img :src="item.img" alt :class="{active:index === idex}" />
          </transition>
        </div>
        <div>{{item.navtext}}</div>
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
    <div class="early-warning">
      <!-- 课时预警 -->
      <div class="data-warning">
        <div class="data-warning-title">
          <div class="data-warning-titleLeft">
            <span>课时预警</span>
            <span>请假预警</span>
            <i>
              <!-- <img src="@/public/images/shuaxin.png" alt /> -->
            </i>
          </div>
          <div class="data-warning-titleRecord">
            <span>共0记录</span>
            <i></i>
          </div>
        </div>
        <div class="data-warning-content">暂无预警</div>
      </div>
      <!-- 排课预警 -->
      <div class="sort-warning">
        <div class="sort-warning-title">
          <div class="sort-warning-titleLeft">
            <span>排课预警</span>
            <i>
              <!-- <img src="@/public/images/shuaxin.png" alt /> -->
            </i>
          </div>
          <div class="sort-warning-titleRecord">
            <span>共0记录</span>
            <i></i>
          </div>
        </div>
        <div class="sort-warning-content">暂无预警</div>
      </div>
      <!-- 流失预警 -->
      <div class="lose-warnin">
        <div class="lose-warnin-title">
          <div class="lose-warnin-titleLeft">
            <span>流失预警</span>
            <i>
              <!-- <img src="@/public/images/shuaxin.png" alt /> -->
            </i>
          </div>
          <div class="lose-warnin-titleRecord">
            <span>共0记录</span>
            <i></i>
          </div>
        </div>
        <div class="lose-warnin-content">暂无预警</div>
      </div>
    </div>

    <!-- 提醒部分 -->
    <div class="remind">
      <!-- 待办提醒 -->
      <div class="await-remind">
        <div class="await-remind-title">
          <div class="await-remind-titleLeft">
            <i>
              <img src="@/public/images/daiban.png" alt />
            </i>
            <span>待办提醒</span>
            <i class="refresh">
              <img src="@/public/images/shuaxin.png" alt />
            </i>
          </div>
          <div class="await-remind-titleRecord">
            <span>今日共0条待办</span>
            <i></i>
          </div>
        </div>
        <!-- 内容 -->
        <div class="await-remind-content clearfix">
          <table class="tabledata">
            <tr v-for="(item,index) in tableData" :key="index">
              <td v-for="(content,index) in item" :key="index">{{content}}</td>
            </tr>
          </table>
          <i></i>
        </div>
      </div>
      <!-- 试听 -->
      <div class="hear-remind">
        <div class="hear-remind-title">
          <div class="hear-remind-titleLeft">
            <i>
              <img src="@/public/images/daiban.png" alt />
            </i>
            <span>待办提醒</span>
            <i class="refresh">
              <img src="@/public/images/shuaxin.png" alt />
            </i>
          </div>
          <div class="hear-remind-titleRecord">
            <span>今日共0条待办</span>
            <i></i>
          </div>
        </div>
        <!-- 内容 -->
        <div class="hear-remind-content clearfix">
          <table class="tabledata">
            <tr v-for="(item,index) in tableData" :key="index">
              <td v-for="(content,index) in item" :key="index">{{content}}</td>
            </tr>
          </table>
          <i></i>
        </div>
      </div>
      <!-- 生日 -->
      <div class="happy-remind">
        <div class="happy-remind-title">
          <div class="happy-remind-titleLeft">
            <i>
              <img src="@/public/images/daiban.png" alt />
            </i>
            <span>待办提醒</span>
            <i class="refresh">
              <img src="@/public/images/shuaxin.png" alt />
            </i>
          </div>
          <div class="happy-remind-titleRecord">
            <span>今日共0条待办</span>
            <i></i>
          </div>
        </div>
        <!-- 内容 -->
        <div class="happy-remind-content clearfix">
          <table class="tabledata">
            <tr v-for="(item,index) in tableData" :key="index">
              <td v-for="(content,index) in item" :key="index">{{content}}</td>
            </tr>
          </table>
          <i></i>
        </div>
      </div>
    </div>

    <!-- 学员统计 -->
    <div class="visual">
      <div class="visual-student">
        <div class="visual-student-title">
          <div class="title-left">
            <i></i>
            <span>学员统计情况</span>
          </div>
          <div class="title-right">
            <div class="title-condition">
              <ul>
                <li>学员报名情况</li>
                <li>学员出勤情况</li>
                <li>课消统计情况</li>
                <li>教师绩效统计</li>
              </ul>
            </div>
            <div class="title-right-apply action">
              <span>学生入校参观和报名人数统计表</span>
            </div>
          </div>
        </div>
        <div class="visual-student-content"></div>
      </div>
      <div class="visual-school">学校统计</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      idex: "",
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
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ]
    };
  },
  methods: {
    yiru(index) {
      this.idex = index;
    },
    yichu() {
      this.idex = false;
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  padding: 20px 20px 0;
  // 常用导航栏
  .frequently {
    width: 100%;
    background-color: #fff;
    display: flex;
    padding: 15px 0;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 12px;
    .frequently-nav {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .frequently-nav-img {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  // 公告
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
  // 预警
  .early-warning {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    .data-warning,
    .sort-warning,
    .lose-warnin {
      flex: 1;
      height: 300px;
      background-color: #fff;
      margin-right: 10px;
      border-radius: 5px;
    }
    // 课时预警
    .data-warning {
      .data-warning-title {
        height: 40px;
        background-color: #d7edff;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        padding: 10px 10px;
        box-sizing: border-box;

        .data-warning-titleLeft {
          float: left;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
            margin-right: 10px;
          }

          i {
            cursor: pointer;
          }
        }

        .data-warning-titleRecord {
          float: right;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
          }
        }
      }

      .data-warning-content {
        height: 260px;
      }
    }
    //排课预警
    .sort-warning {
      .sort-warning-title {
        height: 40px;
        background-color: #ffedd7;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        padding: 10px 10px;
        box-sizing: border-box;

        .sort-warning-titleLeft {
          float: left;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
            margin-right: 10px;
          }

          i {
            cursor: pointer;
          }
        }

        .sort-warning-titleRecord {
          float: right;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
          }
        }
      }
    }
    //流失预警
    .lose-warnin {
      margin-right: 0;

      .lose-warnin-title {
        height: 40px;
        background-color: #ffd7d7;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        padding: 10px 10px;
        box-sizing: border-box;

        .lose-warnin-titleLeft {
          float: left;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
            margin-right: 10px;
          }

          i {
            cursor: pointer;
          }
        }

        .lose-warnin-titleRecord {
          float: right;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
          }
        }
      }
    }
  }
  // 提醒
  .remind {
    width: 100%;
    display: flex;
    border-radius: 5px;
    margin-bottom: 20px;
    .await-remind {
      flex: 1;
      background-color: #fff;
      height: 100%;
      border-radius: 5px 0 0 5px;
      .await-remind-title {
        height: 40px;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        padding: 10px 20px 10px 10px;
        box-sizing: border-box;
        .await-remind-titleLeft {
          float: left;
          height: 100%;
          display: flex;
          align-items: center;
          span {
            color: #666;
            margin-right: 10px;
          }
          .refresh {
            cursor: pointer;
            margin-right: 0;
          }
          i {
            margin-right: 10px;
          }
        }
        .await-remind-titleRecord {
          float: right;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
          }
        }
      }
      .await-remind-content {
        padding: 10px;
        height: 260px;
        box-sizing: border-box;
        width: 100%;
        position: relative;
        i {
          display: inline-block;
          width: 2px;
          height: 85%;
          background-color: #eee;
          position: absolute;
          top: 12px;
          right: 0px;
        }
        .tabledata {
          width: 100%;
          height: 100%;
          font-size: 12px;
          tr {
            width: 100%;
            border-bottom: 1px solid #e5e5e5;
            height: 33px;
            line-height: 33px;
            display: flex;
            td {
              flex: 1;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
        // .el-table {
        //   height: 0;
        // }
      }
    }
    .hear-remind {
      flex: 1;
      background-color: #fff;
      height: 100%;
      .hear-remind-title {
        height: 40px;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        padding: 10px 20px 10px 10px;
        box-sizing: border-box;
        .hear-remind-titleLeft {
          float: left;
          height: 100%;
          display: flex;
          align-items: center;
          span {
            color: #666;
            margin-right: 10px;
          }
          .refresh {
            cursor: pointer;
            margin-right: 0;
          }
          i {
            margin-right: 10px;
          }
        }
        .hear-remind-titleRecord {
          float: right;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
          }
        }
      }
      .hear-remind-content {
        padding: 10px;
        height: 260px;
        box-sizing: border-box;
        width: 100%;
        position: relative;
        i {
          display: inline-block;
          width: 2px;
          height: 85%;
          background-color: #eee;
          position: absolute;
          top: 12px;
          right: 0px;
        }
        .tabledata {
          width: 100%;
          height: 100%;
          font-size: 12px;
          tr {
            width: 100%;
            border-bottom: 1px solid #e5e5e5;
            height: 33px;
            line-height: 33px;
            display: flex;
            td {
              flex: 1;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
        // .el-table {
        //   height: 0;
        // }
      }
    }
    .happy-remind {
      flex: 1;
      background-color: #fff;
      height: 100%;
      border-radius: 0 5px 5px 0;
      .happy-remind-title {
        height: 40px;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        padding: 10px 20px 10px 10px;
        box-sizing: border-box;
        .happy-remind-titleLeft {
          float: left;
          height: 100%;
          display: flex;
          align-items: center;
          span {
            color: #666;
            margin-right: 10px;
          }
          .refresh {
            cursor: pointer;
            margin-right: 0;
          }
          i {
            margin-right: 10px;
          }
        }
        .happy-remind-titleRecord {
          float: right;
          height: 100%;
          display: flex;
          align-items: center;

          span {
            cursor: pointer;
          }
        }
      }
      .happy-remind-content {
        padding: 10px;
        height: 260px;
        box-sizing: border-box;
        width: 100%;
        position: relative;
        i {
          display: inline-block;
          width: 2px;
          height: 85%;
          background-color: #eee;
          position: absolute;
          top: 12px;
          right: 0px;
        }
        .tabledata {
          width: 100%;
          height: 100%;
          font-size: 12px;
          tr {
            width: 100%;
            border-bottom: 1px solid #e5e5e5;
            height: 33px;
            line-height: 33px;
            display: flex;
            td {
              flex: 1;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
  // 学员统计
  .visual {
    margin-bottom: 20px;
    height: 400px;
    width: 100%;
    display: flex;
    .visual-student {
      flex: 2;
      background-color: #fff;
      margin-right: 10px;
      border-radius: 5px;
      .visual-student-title {
        display: flex;
        height: 20px;
        font-size: 12px;
        padding-left: 18px;
        padding: 10px;
        justify-content: space-between;
        .title-left {
          height: 20px;
          display: flex;
          align-items: center;
          color: #666;
          span {
            color: inherit;
          }
        }
        .title-right {
          display: flex;
          height: 20px;
          .title-condition {
            flex: 2;
            height: 100%;
            ul {
              height: 100%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              li {
                height: 100%;
                margin-right: 5px;
                padding: 0 5px;
                display: flex;
                align-items: center;
                cursor: pointer;
                &:nth-child(4) {
                  margin-right: 0;
                }
              }
            }
          }
          .title-right-apply {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 15px;
            span {
              display: block;
              height: 100%;
              line-height: 20px;
              padding: 0 5px;
            }
          }
        }
      }
    }
    .visual-school {
      flex: 1;
      background-color: #fff;
      border-radius: 5px;
    }
    .action {
      background-color: #4284fc;
      border-radius: 5px;
      color: #fff;
    }
  }
}
.active {
  width: 80% !important;
  height: 80% !important;
}
.miniimg-enter-active {
  transition: width 2s;
}
.miniimg-leave-active {
  transition: width 2s;
}
// .clearfix:after {
//   content: "";
//   display: block;
//   height: 0;
//   clear: both;
//   visibility: hidden;
// }
// .clearfix {
//   *zoom: 1;
// }
@media only screen and (max-width: 992px) {
  .remind {
    display: block !important;
    .await-remind-content,
    .hear-remind-content,
    .happy-remind-content {
      i {
        display: none !important;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .early-warning {
    width: 100%;
    display: block !important;
    .data-warning {
      width: 100%;
      margin-bottom: 10px;
    }
    .sort-warning {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>