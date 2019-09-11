<template>
  <div class="remind">
    <!-- 待办提醒 -->
    <div class="awaitRemind">
      <div class="awaitRemind-title">
        <div class="awaitRemind-titleLeft">
          <span>课时预警</span>
          <span>请假预警</span>
          <i>
            <img src="../../assets/images/shuaxin.png" alt />
          </i>
        </div>
        <div class="awaitRemind-titleRecord">
          <span>共0记录</span>
          <i></i>
        </div>
      </div>
      <div class="awaitRemind-content">暂无预警</div>
    </div>
    <!-- 试听 -->
    <div class="hearRemind"></div>
    <!-- 生日 -->
    <div class="happyRemind"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.remind{
    width: 100%;
    display: flex;
    height:500px;
    .awaitRemind{
        flex:1;
        background-color: #fff;
    }
    .hearRemind{
        flex:1;
        background-color: #fff;
    }
    .happyRemind{
        flex:1;
        background-color: #fff;
    }
}
</style>