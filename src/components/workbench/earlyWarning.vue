<template>
  <div class="earlyWarning">
    <!-- 课时预警 -->
    <div class="dataWarning">
      <div class="dataWarning-title">
        <div class="dataWarning-titleLeft">
          <span>课时预警</span>
          <span>请假预警</span>
          <i>
            <img src="../../assets/images/shuaxin.png" alt />
          </i>
        </div>
        <div class="dataWarning-titleRecord">
          <span>共0记录</span>
          <i></i>
        </div>
      </div>
      <div class="dataWarning-content">暂无预警</div>
    </div>
    <!-- 排课预警 -->
    <div class="sortWarning">
      <div class="sortWarning-title">
        <div class="dataWarning-titleLeft">
          <span>排课预警</span>
          <i>
            <img src="../../assets/images/shuaxin.png" alt />
          </i>
        </div>
        <div class="dataWarning-titleRecord">
          <span>共0记录</span>
          <i></i>
        </div>
      </div>
      <div class="sortWarning-content">暂无预警</div>
    </div>
    <!-- 流失预警 -->
    <div class="loseWarnin">
      <div class="loseWarnin-title">
        <div class="dataWarning-titleLeft">
          <span>流失预警</span>
          <i>
            <img src="../../assets/images/shuaxin.png" alt />
          </i>
        </div>
        <div class="dataWarning-titleRecord">
          <span>共0记录</span>
          <i></i>
        </div>
      </div>
      <div class="loseWarnin-content">暂无预警</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.earlyWarning {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  .dataWarning,
  .sortWarning,
  .loseWarnin {
    flex: 1;
    height: 300px;
    background-color: #fff;
    margin-right: 10px;
    border-radius: 5px;
  }

  .dataWarning {
    .dataWarning-title {
      height: 40px;
      background-color: #d7edff;
      border-radius: 5px 5px 0 0;
      font-size: 12px;
      padding: 10px 10px;
      box-sizing: border-box;

      .dataWarning-titleLeft {
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

      .dataWarning-titleRecord {
        float: right;
        height: 100%;
        display: flex;
        align-items: center;

        span {
          cursor: pointer;
        }
      }
    }

    .dataWarning-content {
      height: 260px;
    }
  }

  .sortWarning {
    .sortWarning-title {
      height: 40px;
      background-color: #ffedd7;
      border-radius: 5px 5px 0 0;
      font-size: 12px;
      padding: 10px 10px;
      box-sizing: border-box;

      .dataWarning-titleLeft {
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

      .dataWarning-titleRecord {
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

  .loseWarnin {
    margin-right: 0;

    .loseWarnin-title {
      height: 40px;
      background-color: #ffd7d7;
      border-radius: 5px 5px 0 0;
      font-size: 12px;
      padding: 10px 10px;
      box-sizing: border-box;

      .dataWarning-titleLeft {
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

      .dataWarning-titleRecord {
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
</style>