<template>
  <div class="rightAside">
    <!-- 考勤看板标题 -->
    <div class="title">
      <span
        v-for="(item,index) in title"
        :key="index"
        @click="titleCut(index)"
        :class="{titleActive:index === titleCutIndex}"
      >{{item.name}}</span>
    </div>
    <!-- 考勤看板内容 -->
    <div class="knowledge">
      <div class="knowledge-search">
        <el-input placeholder="请输入关键词"></el-input>
        <el-button size="mini" type="primary" icon="el-icon-search"></el-button>
      </div>
      <div class="knowledge-content">
        <span>没有关联的知识点</span>
        <el-button :plain="true" size="small">我要补充</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: [{ name: "知识库", id: 1 }, { name: "考勤看板", id: 2 }],
      titleIndex: true,
      titleCutIndex: 0
    };
  },
  methods: {
    titleCut(index) {
      this.titleCutIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
.rightAside {
  width: 100%;
  .title {
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #ededed;
    margin-bottom: 10px;
    span {
      display: inline-block;
      padding: 10px 15px;
      cursor: pointer;
    }
    .titleActive {
      color: #39f;
      border-bottom: 2px solid #39f;
    }
  }
  .knowledge {
    padding: 15px;
    height: 100%;
    .knowledge-search {
      display: flex;
      margin-bottom: 20px;
      /deep/.el-input {
        height: 32px;
        input {
          height: 100%;
        }
      }
    }
    .knowledge-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      span {
        font-size: 14px;
      }
      .el-button {
        margin-top: 30px;
        font-size: 12px;
      }
    }
  }
}
</style>