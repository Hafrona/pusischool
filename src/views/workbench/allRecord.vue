<template>
  <div class="record">
    <el-dialog title="收货地址" :visible.sync="recordOpen" :close-on-click-modal='false' @close='recordClose' width='700px'>
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  data() {
    return {
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
      recordOpen:false
    };
  },
  props:{
      recordVisible:{
          type:Boolean,
          default:false
      }
  },
  watch:{
    recordVisible(){
      this.recordOpen = this.recordVisible
    }
  },
  methods:{
      recordClose(){
        this.$emit('recordClose',false)
      }
  },
  mounted () {
  }
};
</script>
<style lang="less" scoped>
</style>