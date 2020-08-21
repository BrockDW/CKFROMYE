<template>
  <div>
    <el-container>
      <el-header height="80px">
        <el-row type="flex">
          <!-- <el-col :span="1">
            <div class="grid-content">
              <el-image class="logo" style="padding-top: 10px" :src="require('../assets/logo.png')"></el-image>
            </div>
          </el-col>-->
          <el-col :span="4">
            <div class="grid-content">Coach K</div>
          </el-col>
          <el-col :span="11">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="9">
            <div class="grid-content">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                unique-opened
                router
              >
                <el-menu-item index="/learnCausually">随便学学</el-menu-item>
                <el-menu-item index="/learnSeriously">认真学学</el-menu-item>
                <el-menu-item index="/myLikes">我的有用</el-menu-item>
                <el-menu-item>
                  <el-button type="text" @click="handleBackIndex()">返回首页</el-button>
                </el-menu-item>
                <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" center>
                  <span>确定回去了吗？笔记不会保存哦</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="handleConfirm()">确 定</el-button>
                  </span>
                </el-dialog>
              </el-menu>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      activeIndex: "/learnCausually",
      msg: "Welcome to Your Vue.js App",
      dialogVisible: false
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    handleBackIndex() {
      this.dialogVisible = true;
    },

    handleConfirm() {
      window.location.href = "https://www.scholarhills.com/";
    }
  },

  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "langyuanti";
  src: url("../assets/fonts/langyuanti.ttf");
}

.el-header {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #333;
  line-height: 80px;
  font-size: 1.8em;
  font-family: "langyuanti";
}

.el-main {
  background-color: #ededed;
  color: #333;
  position: absolute;
  margin-top: 80px;
  height: calc(100% - 80px);
  width: 100%;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.logo {
  width: 60px;
  height: 60px;
}

.el-menu--horizontal > .el-menu-item {
  float: left;
  height: 80px;
  line-height: 80px;
  margin: 0;
  font-size: 0.8em;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 6px solid #ffd275;
}

.dialog-footer .el-button {
  font-family: "langyuanti";
}

.el-dialog__wrapper >>> .el-dialog--center .el-dialog__body{
  font-size: 0.8em;
  text-align: center;
}

.el-button--text {
  font-family: "langyuanti";
  font-size: 1em;
  padding-bottom: 25px;
  color: #e4e4e4;
}

.el-button--text:hover {
  color: #ffd275;
}
</style>
