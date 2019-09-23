<template>
  <div class="workbenchNav">
    <!-- 遮罩层 -->
    <div class="nav-mask">
      <!-- 表单 -->
      <div class="register-form" @click="hello">
        <div class="form-title">
          <span>咨询登记</span>
          <div class="title-close"><i  @click="titleConcel">x</i></div>
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
              <el-input v-model="dynamicValidateForm.gender"></el-input>
            </el-form-item>
            <el-form-item :label="'出生日期'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'首选电话'">
              <el-input v-model="dynamicValidateForm.phone"></el-input>
            </el-form-item>
            <el-form-item :label="'关系'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'亲属姓名'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'昵称'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'身份证号'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'家庭住址'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'公立学校'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'年级'">
              <el-input></el-input>
            </el-form-item>
            <el-form-item :label="'班级'">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <div class="content-unfold">
            <span>展开更多</span>
          </div>
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
        email: "",
        gender:'',
        phone:''
      },
      concel:false,
    };
  },
  methods: {
    hello() {
    },
    titleConcel(){
      this.$emit("concel",this.concel)
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
      .form-title{
        display: flex;
        height: 30px;
        padding:0 15px;
        span{
          flex: 1;
          display: flex;
          align-items: center;
        }
        .title-close{
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          i{
            display: block;
            width: 20px;
            height: 20px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            text-align: center;
          }
        }
      }
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
      .content-unfold{
        text-align: center;
        height: 20px;
        
        span{
          cursor: pointer;
        }
      }
    }
  }
}
</style>