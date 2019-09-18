<template>
  <div class="workbenchNav">
    <div class="nav-mask">
      <div class="register-form" @click="hello">
        <div class="form-title">
          <span>咨询登记</span>
          <i></i>
        </div>
        <div class="form-content">
          <el-form
            :model="dynamicValidateForm"
            ref="dynamicValidateForm"
            label-width="100px"
            class="demo-dynamic"
          >
            <el-form-item prop="email" label="姓名">
              <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item :label="'性别'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'域名'">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navindex: {
      type: Number
    }
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        email: ""
      }
    };
  },
  methods: {
    hello() {
      console.log(this.navindex);
    }
  }
};
</script>
<style lang="less" scoped>
.workbenchNav {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  .nav-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.6);
    padding-top: 100px;
    .register-form {
      width: 700px;
      height: 320px;
      background-color: #fff;
      margin: 0 auto;
      .form-content {
          width: 100%;
          height: 100%;
          padding:10px;
          box-sizing: border-box;
        .el-form {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .el-form-item {
            width: 33.33%;
            display: flex;
            /deep/.el-form-item__content {
              margin: 0 !important;
            }
            .el-input {
              width: 100%;
              /deep/.el-input__inner {
                border: none;
                border-radius: 0;
                border-bottom: 1px solid #ddd;
              }
            }
          }
        }
      }
    }
  }
}
</style>