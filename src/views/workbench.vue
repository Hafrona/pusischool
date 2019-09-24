<template>
  <div class="main">
    <!-- 常用导航栏 -->
    <div class="frequently">
      <div class="frequently-nav" v-for="(item,index) in nav" :key="index">
        <div
          class="frequently-nav-img"
          @mouseenter="frequentlyEnter(index)"
          @mouseleave="frequentlyLeave()"
          @click="freaquentlyNavClick(item.id)"
        >
          <transition name="miniimg">
            <img :src="item.img" alt :class="{active:index === idex}" />
          </transition>
        </div>
        <div>{{item.navtext}}</div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="notice">
      <i></i>
      <div class="noticetext">
        <span>暂无公告</span>
      </div>
      <span></span>
    </div>
    <!-- 预警 -->
    <div class="early-warning">
      <!-- 课时预警 -->
      <div class="hour-warning">
        <div class="hour-warning-title">
          <div class="hour-warning-titleLeft">
            <span
              v-for="(item,index) in timeWarningText"
              :key="index"
              @click="timeWarningSelect(index)"
              :class="{timeWarningActive:index === timeIndex}"
            >{{item.name}}</span>
            <i>
              <img src="../../public/picture/shuaxin.png" alt />
            </i>
          </div>
          <div class="hour-warning-titleRecord" @click="hourRecord">
            <span>共0记录</span>
            <i></i>
          </div>
        </div>
        <div class="hour-warning-content">暂无预警</div>
      </div>
      <!-- 排课预警 -->
      <div class="sort-warning">
        <div class="sort-warning-title">
          <div class="sort-warning-titleLeft">
            <span>排课预警</span>
            <i>
              <img src="../../public/picture/shuaxin.png" alt />
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
      <div class="lose-warning">
        <div class="lose-warning-title">
          <div class="lose-warning-titleLeft">
            <span>流失预警</span>
            <i>
              <img src="../../public/picture/shuaxin.png" alt />
            </i>
          </div>
          <div class="lose-warning-titleRecord">
            <span>共0记录</span>
            <i></i>
          </div>
        </div>
        <div class="lose-warning-content">暂无预警</div>
      </div>
      <allRecord :recordVisible="recordVisible" @recordClose="recordClose" />
    </div>
    <!-- 提醒部分 -->
    <div class="remind">
      <!-- 待办提醒 -->
      <div class="await-remind">
        <div class="await-remind-title">
          <div class="await-remind-titleLeft">
            <i>
              <img src="../../public/picture/daiban.png" alt />
            </i>
            <span>待办提醒</span>
            <i class="refresh">
              <img src="../../public/picture/shuaxin.png" alt />
            </i>
          </div>
          <div class="await-remind-titleRecord">
            <span>今日共0条待办</span>
            <i></i>
          </div>
        </div>
        <!-- 内容 -->
        <div class="await-remind-content">
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
              <img src="../../public/picture/shiting.png" alt />
            </i>
            <span
              v-for="(item,index) in hearRemind"
              :key="index"
              @click="remindClick(index)"
              :class="{timeWarningActive:index === remindIndex}"
            >{{item.text}}</span>
            <i class="refresh">
              <img src="../../public/picture/shuaxin.png" alt />
            </i>
          </div>
          <div class="hear-remind-titleRecord">
            <span>今日共0条待办</span>
            <i></i>
          </div>
        </div>
        <!-- 内容 -->
        <div class="hear-remind-content">
          <table class="tabledata" v-show="hearNotData">
            <tr v-for="(item,index) in hearDataIndex" :key="index">
              <td v-for="(content,index) in item" :key="index">{{content}}</td>
            </tr>
          </table>
          <div class="hear-content-notData" v-show="!hearNotData">
            <span>暂无试听学员</span>
            <i></i>
          </div>
        </div>
      </div>
      <!-- 生日 -->
      <div class="happy-remind">
        <div class="happy-remind-title">
          <div class="happy-remind-titleLeft">
            <i>
              <img src="../../public/picture/shengri.png" alt />
            </i>
            <span>生日提醒</span>
            <i class="refresh">
              <img src="../../public/picture/shuaxin.png" alt />
            </i>
          </div>
          <div class="happy-remind-titleRecord">
            <span>三天内共0人生日</span>
            <i></i>
          </div>
        </div>
        <!-- 内容 -->
        <div class="happy-remind-content">
          <table class="tabledata">
            <tr v-for="(item,index) in tableData" :key="index">
              <td v-for="(content,index) in item" :key="index">{{content}}</td>
            </tr>
          </table>
          <i></i>
        </div>
      </div>
    </div>
    <!-- 统计 -->
    <div class="visual">
      <!-- 左边部分学员统计情况 -->
      <div class="visual-student">
        <div class="visual-student-title">
          <div class="title-left">
            <i></i>
            <span>学员统计情况</span>
          </div>
          <div class="title-right">
            <div class="title-condition">
              <ul>
                <li
                  v-for="(item,index) in studentTitle"
                  :key="index"
                  @click="studenStatistics(index)"
                  :class="{visualAction:index === studentIndex}"
                >{{item.text}}</li>
              </ul>
            </div>
            <!-- <div class="title-right-apply action">
            </div>-->
          </div>
        </div>
        <div class="visual-student-content">
          <div class="student-statistics"></div>
        </div>
      </div>
      <!-- 右边部分学校统计情况 -->
      <div class="visual-school">
        <div class="visual-school-title">
          <div class="title-left">
            <i></i>
            <span>学校概括统计</span>
          </div>
          <div class="title-right">
            <div class="title-condition">
              <span
                v-for="(item,index) in schoolTitle"
                :key="index"
                @click="schoolStatistics(index)"
                :class="{visualAction:index === schoolIndex}"
              >{{item.text}}</span>
            </div>
          </div>
        </div>
        <div class="visual-school-content"></div>
      </div>
    </div>
    <!-- 点击常用导航栏，然后判断当前点击，拿到索引，根据索引的不同加载不同的内容 -->
    <!-- <workbenchNav :navindex="navIndex" v-show="navState" @concel='navClose'/> -->
  </div>
</template>
<script>
// import workbenchNav from "@/views/workbench/workbenchNav.vue";
import allRecord from "@/views/workbench/allRecord.vue";
export default {
  components: {
    // workbenchNav,
    allRecord
  },
  data() {
    return {
      show: false,
      idex: "",
      // 咨询登记判断
      // navState: false,
      // 课时预警
      timeWarningText: [
        { name: "课时预警", id: 1 },
        { name: "请假预警", id: 2 }
      ],
      timeIndex: 0,
      // 查看全部记录
      recordVisible: false,
      // 常用导航栏数据
      navIndex: 1,
      nav: [
        {
          navtext: "咨询登记",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 1,
          workbenchNav: false
        },
        {
          navtext: "客户登记",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 2,
          workbenchNav: false
        },
        {
          navtext: "新生报到",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 3,
          workbenchNav: false
        },
        {
          navtext: "老生缴费",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 4,
          workbenchNav: false
        },
        {
          navtext: "考勤",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 5,
          workbenchNav: false
        },
        {
          navtext: "结转",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 6,
          workbenchNav: false
        },
        {
          navtext: "退费",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 7,
          workbenchNav: false
        },
        {
          navtext: "请假",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 8,
          workbenchNav: false
        },
        {
          navtext: "发短信",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 9,
          workbenchNav: false
        },
        {
          navtext: "发微信",
          img:
            "http://sp1.xiao360.com/static/ui/pc/t/default/register-fast.png",
          id: 10,
          workbenchNav: false
        }
      ],
      //学员统计情况
      studentTitle: [
        { text: "学员统计情况", id: 1 },
        { text: "学员出勤情况", id: 2 },
        { text: "课消统计情况", id: 3 },
        { text: "教师绩效统计", id: 4 },
        { text: "学生入校参观和报名人数统计表", id: 5 }
      ],
      studentIndex: 0,
      //学校统计情况
      schoolTitle: [
        { text: "绩效分数分布图", id: 1 },
        { text: "生源来源统计图", id: 2 }
      ],
      schoolIndex: 0,
      //试听提醒
      hearRemind: [{ text: "试听提醒", id: 1 }, { text: "诺到提醒", id: 2 }],
      remindIndex: 0,
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
      ],
      hearData: [
        [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ]
      ],
      hearDataIndex:[],
      hearNotData:true
    };
  },
  methods: {
    // 常用导航栏移入移出事件
    frequentlyEnter(index) {
      this.idex = index;
    },
    frequentlyLeave() {
      this.idex = false;
    },
    // 常用导航点击
    freaquentlyNavClick(id) {
      this.navIndex = id;
      // this.navState = true;
    },
    // 数据统计图
    drawLine() {
      let myChart = this.$echarts.init(
        document.querySelector(".student-statistics")
      );
      myChart.setOption({
        title: { text: "" },
        tooltip: {},
        xAxis: {
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20, 30, 14, 52, 18, 25, 36]
          }
        ]
      });
    },
    // 课时预警
    timeWarningSelect(index) {
      this.timeIndex = index;
    },
    //课时预警查看全部记录
    hourRecord() {
      this.recordVisible = true;
    },
    recordClose(data) {
      this.recordVisible = data;
    },
    //学员统计情况
    studenStatistics(index) {
      this.studentIndex = index;
    },
    //学校统计情况
    schoolStatistics(index) {
      this.schoolIndex = index;
    },
    //试听提醒
    remindClick(index) {
      this.remindIndex = index;
      this.hearDataIndex = this.hearData[index];
    }
    //关闭常用导航栏弹窗
    // navClose(data){
    //   this.navState = data
    // }
  },
  mounted() {
    this.drawLine();
    this.remindIndex = 0,
    this.hearDataIndex = this.hearData[0]
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
      width: 40px;
      height: 100%;
      display: flex;
      align-items: center;
      // padding-left: 20px;
      // margin-right: 15px;
      background: url("../../public/picture/gonggao.png") no-repeat center;
    }
    > span {
      position: absolute;
      top: 10px;
      right: 20px;
      display: block;
      width: 20px;
      height: 20px;
      background: url("../../public/picture/bigup.png") no-repeat;
      cursor: pointer;
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
    .hour-warning,
    .sort-warning,
    .lose-warning {
      flex: 1;
      height: 300px;
      background-color: #fff;
      margin-right: 10px;
      border-radius: 5px;
    }
    // 课时预警
    .hour-warning,
    .sort-warning,
    .lose-warning {
      .hour-warning-title,
      .sort-warning-title,
      .lose-warning-title {
        height: 40px;
        background-color: #d7edff;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        padding: 10px 10px;
        box-sizing: border-box;
        .hour-warning-titleLeft,
        .sort-warning-titleLeft,
        .lose-warning-titleLeft {
          float: left;
          height: 100%;
          display: flex;
          align-items: center;
          span {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-right: 5px;
          }
          i {
            cursor: pointer;
          }
        }

        .hour-warning-titleRecord,
        .sort-warning-titleRecord,
        .lose-warning-titleRecord {
          float: right;
          height: 100%;
          display: flex;
          align-items: center;
          span {
            cursor: pointer;
          }
        }
      }

      .hour-warning-content,
      .sort-warning-content,
      .lose-warning-content {
        line-height: 260px;
        text-align: center;
        height: 260px;
      }
    }
    //排课预警
    .sort-warning {
      .sort-warning-title {
        background-color: #ffedd7;
        .sort-warning-titleLeft {
          span {
            cursor: text;
            margin-right: 10px;
          }
        }
      }
    }
    //流失预警
    .lose-warning {
      margin-right: 0;
      .lose-warning-title {
        background-color: #ffd7d7;
        .lose-warning-titleLeft {
          span {
            cursor: text;
            margin-right: 10px;
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
    .await-remind,
    .hear-remind,
    .happy-remind {
      flex: 1;
      background-color: #fff;
      height: 100%;
      border-radius: 5px 0 0 5px;
      .await-remind-title,
      .hear-remind-title,
      .happy-remind-title {
        height: 40px;
        border-radius: 5px 5px 0 0;
        font-size: 12px;
        padding: 10px 20px 10px 10px;
        box-sizing: border-box;
        .await-remind-titleLeft,
        .hear-remind-titleLeft,
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
        .await-remind-titleRecord,
        .hear-remind-titleRecord,
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
      .await-remind-content,
      .hear-remind-content,
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
    .hear-remind {
      border-radius: 0;
      .hear-remind-title {
        .hear-remind-titleLeft {
          span {
            color: #909090;
            margin-right: 5px;
            display: flex;
            height: 100%;
            align-items: center;
            cursor: pointer;
          }
        }
      }
      .hear-remind-content{
        .hear-content-notData{
          height:100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .happy-remind {
      border-radius: 0 5px 5px 0;
    }
  }
  // 学员统计
  .visual {
    margin-bottom: 20px;
    height: 400px;
    width: 100%;
    display: flex;
    // 学员统计情况
    .visual-student,
    .visual-school {
      flex: 2;
      background-color: #fff;
      margin-right: 10px;
      border-radius: 5px;
      .visual-student-title,
      .visual-school-title {
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
            display: flex;
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
        }
      }
    }
    // 学校统计情况
    .visual-school {
      flex: 1;
      background-color: #fff;
      margin-right: 0;
      .visual-school-title {
        .title-right {
          .title-condition {
            align-items: center;
            span {
              display: flex;
              height: 100%;
              padding: 0 5px;
              margin-left: 10px;
              align-items: center;
              cursor: pointer;
            }
          }
        }
      }
    }
    .visualAction {
      background-color: #4284fc;
      border-radius: 5px;
      color: #fff;
    }
  }
}
.active {
  width: 80% !important;
  height: 80% !important;
  transition: all 0.3s;
}
.timeWarningActive {
  color: #656565 !important;
  border-bottom: 1px solid #656565;
}
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
    .hour-warning {
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