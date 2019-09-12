<template>
  <div class="visual">
    <div class="visual-student">
      <div class="visual-student-title">
        <div class="title-left ">
          <i></i>
          <span>学员统计情况</span>
        </div>
        <div class="titleRight">
          <div class="titleCondition">
            <ul>
              <li>学员报名情况</li>
              <li>学员出勤情况</li>
              <li>课消统计情况</li>
              <li>教师绩效统计</li>
            </ul>
          </div>
          <div class="titleRight-apply action">
            <span>学生入校参观和报名人数统计表</span>
          </div>
        </div>
      </div>
      <div class="visual-student-content"></div>
    </div>
    <div class="visual-school">学校统计</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
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
      .titleRight {
        display: flex;
        height: 20px;
        .titleCondition {
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
              padding:0 5px;
              display: flex;
              align-items: center;
              cursor: pointer;
              &:nth-child(4) {
                margin-right: 0;
              }
            }
          }
        }
        .titleRight-apply {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin:0 15px;
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
</style>