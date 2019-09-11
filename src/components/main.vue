<template>
  <div class="main">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>工作台</el-breadcrumb-item>
      <el-breadcrumb-item>总览</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
.main{
    .el-breadcrumb{
        height: 50px;
        font-size: 18px;
        background-color: #fff;
    }
}
</style>