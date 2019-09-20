<template>
  <div class="breadcrumb">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(level,index) in levelList"
        :key="index"
        :to="level.path"
      >{{level.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //面包屑
      levelList: []
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    //面包屑
    getBreadcrumb() {
      //   let matched = this.$route.matched.filter(item => item.name);
      //   this.levelList = matched;
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.levelList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
};
</script>
<style lang="less" scoped>
.breadcrumb {
  .el-breadcrumb {
    height: 50px;
    font-size: 18px;
    margin-bottom: 0;
    background-color: #fff;
    padding-left: 30px;
    /deep/.is-link {
      font-weight: normal;
    }
  }
}
</style>