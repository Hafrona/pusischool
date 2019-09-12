<template>
  <div class="remind">
    <!-- 待办提醒 -->
    <div class="awaitRemind">
      <div class="awaitRemind-title">
        <div class="awaitRemind-titleLeft">
          <i>
            <img src="@/assets/images/daiban.png" alt />
          </i>
          <span>待办提醒</span>
          <i class="refresh">
            <img src="@/assets/images/shuaxin.png" alt />
          </i>
        </div>
        <div class="awaitRemind-titleRecord">
          <span>今日共0条待办</span>
          <i></i>
        </div>
      </div>
      <!-- 内容 -->
      <div class="awaitRemind-content">
        <table class="tabledata">
          <tr v-for="(item,index) in tableData" :key="index">
            <td v-for="(content,index) in item" :key="index">{{content}}</td>
          </tr>
        </table>
        <i></i>
      </div>
    </div>
    <!-- 试听 -->
    <div class="hearRemind">
      <div class="hearRemind-title">
        <div class="hearRemind-titleLeft">
          <i>
            <img src="@/assets/images/daiban.png" alt />
          </i>
          <span>待办提醒</span>
          <i class="refresh">
            <img src="@/assets/images/shuaxin.png" alt />
          </i>
        </div>
        <div class="hearRemind-titleRecord">
          <span>今日共0条待办</span>
          <i></i>
        </div>
      </div>
      <!-- 内容 -->
      <div class="hearRemind-content">
        <table class="tabledata">
          <tr v-for="(item,index) in tableData" :key="index">
            <td v-for="(content,index) in item" :key="index">{{content}}</td>
          </tr>
        </table>
        <i></i>
      </div>
    </div>
    <!-- 生日 -->
    <div class="happyRemind">
      <div class="happyRemind-title">
        <div class="happyRemind-titleLeft">
          <i>
            <img src="@/assets/images/daiban.png" alt />
          </i>
          <span>待办提醒</span>
          <i class="refresh">
            <img src="@/assets/images/shuaxin.png" alt />
          </i>
        </div>
        <div class="happyRemind-titleRecord">
          <span>今日共0条待办</span>
          <i></i>
        </div>
      </div>
      <!-- 内容 -->
      <div class="happyRemind-content">
        <table class="tabledata">
          <tr v-for="(item,index) in tableData" :key="index">
            <td v-for="(content,index) in item" :key="index">{{content}}</td>
          </tr>
        </table>
        <i></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style lang="less" scoped>
.remind {
  width: 100%;
  display: flex;
  height: 300px;
  border-radius: 5px;
  margin-bottom: 20px;
  .awaitRemind {
    flex: 1;
    background-color: #fff;
    height: 100%;
    border-radius: 5px 0 0 5px;
    .awaitRemind-title {
      height: 40px;
      border-radius: 5px 5px 0 0;
      font-size: 12px;
      padding: 10px 20px 10px 10px;
      box-sizing: border-box;
      .awaitRemind-titleLeft {
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
      .awaitRemind-titleRecord {
        float: right;
        height: 100%;
        display: flex;
        align-items: center;

        span {
          cursor: pointer;
        }
      }
    }
    .awaitRemind-content {
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
  .hearRemind {
    flex: 1;
    background-color: #fff;
    height: 100%;
    .hearRemind-title {
      height: 40px;
      border-radius: 5px 5px 0 0;
      font-size: 12px;
      padding: 10px 20px 10px 10px;
      box-sizing: border-box;
      .hearRemind-titleLeft {
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
      .hearRemind-titleRecord {
        float: right;
        height: 100%;
        display: flex;
        align-items: center;

        span {
          cursor: pointer;
        }
      }
    }
    .hearRemind-content {
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
  .happyRemind {
    flex: 1;
    background-color: #fff;
    height: 100%;
    border-radius: 0 5px 5px 0;
    .happyRemind-title {
      height: 40px;
      border-radius: 5px 5px 0 0;
      font-size: 12px;
      padding: 10px 20px 10px 10px;
      box-sizing: border-box;
      .happyRemind-titleLeft {
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
      .happyRemind-titleRecord {
        float: right;
        height: 100%;
        display: flex;
        align-items: center;

        span {
          cursor: pointer;
        }
      }
    }
    .happyRemind-content {
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
</style>