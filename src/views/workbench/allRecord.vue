<template>
  <div class="record">
    <el-dialog
      title="课次预警"
      :visible.sync="recordOpen"
      :close-on-click-modal="false"
      @close="recordClose"
      width="700px"
    >
      <div class="record-remind">
        <span>当前预警课时1(含)以下的学院，如需修改请前往『系统』『系统设置』『系统参数』进行设置</span>
      </div>
      <el-table :data="gridData">
        <el-table-column property="date" label="姓名" width="150"></el-table-column>
        <el-table-column property="name" label="学管师" width="200"></el-table-column>
        <el-table-column property="address" label="课程"></el-table-column>
        <el-table-column property="date" label="剩余课时"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next"
          :total="400"
          :small="true"
        ></el-pagination>
      </div>
      <div class="record-footer">
        <el-button size="mini">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          address: "没有数据"
        }
      ],
      recordOpen: false,
      currentPage4: 4
    };
  },
  props: {
    recordVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    recordVisible() {
      this.recordOpen = this.recordVisible;
    }
  },
  methods: {
    recordClose() {
      this.$emit("recordClose", false);
    },
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.record {
  position:absolute;
  /deep/.el-dialog__header {
    border-bottom: 1px solid #ededed;
    .el-dialog__title {
      font-size: 14px;
      font-weight: 600;
    }
  }
  .record-remind {
    background-color: #ebf5ff;
    border: 1px solid #d6ebff;
    border-radius: 5px;
    margin-bottom: 15px;
    padding:10px 15px;
    span {
      font-size: 12px;
    }
  }
  /deep/.el-dialog__headerbtn {
    position: absolute;
    top: 13px;
  }
  /deep/.el-dialog__body {
    padding: 10px 20px;
  }
  /deep/.has-gutter {
    tr {
      th {
        background-color: #f4f5f9;
        padding: 5px 0;
        font-size: 12px;
        font-weight: 600;
        color: #333;
      }
    }
  }
  /deep/.el-table__row {
    td {
      padding: 0;
    }
  }
  .block {
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
  }
  .record-footer {
    text-align: right;
    border-top:1px solid #ededed;
    padding:10px 0 0 0;
  }
}
</style>