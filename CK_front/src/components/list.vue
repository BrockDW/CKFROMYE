<template>
  <div
    v-infinite-scroll="load"
    style="overflow:auto; height: 620px"
    infinite-scroll-disabled="disabled"
    infinite-scroll-distance="10"
  >
    <el-scrollbar style="height:100%; overflow-x: hidden" class="scrollbar">
      <el-backtop target=".el-scrollbar__wrap" :bottom="80" :right="650"></el-backtop>
      <el-card
        v-for="(i, index) in this.contentData"
        :key="index"
        class="infinite-list-item box-card"
        shadow="hover"
      >
        <div slot="header" class="clearfix">
          <span
            class="title"
            style="font-weight: bold; font-size: 1.2em; font-family: 'pingfang'; cursor:pointer"
            @click="toReading()"
          >{{ i.content_title }}</span>
          <el-button
            style="float: right; padding: 3px 0; font-weight: bold; font-size: 1.2em; font-family: 'pingfang'; color:#e8bf9d"
            type="text"
          >有用 {{ i.likes }}</el-button>
        </div>
        <div
          class="text item"
          v-if="i.content.length >= 135"
          @click="toReading()"
        >{{ i.content.substring(0,135) + "......." }}</div>
      </el-card>
      <!-- <p v-if="loading">加载中</p>
      <p v-if="noMore">没有更多了</p>-->
    </el-scrollbar>
  </div>
</template>

<script>
import store from "@/components/store";

export default {
  name: "list",
  data() {
    return {
      contentData: store.contentData,
      activeIndex: "/learnCausually",
      msg: "Welcome to Your Vue.js App",
      textarea: "",
      count: 4,
      loading: false
    };
  },

  computed: {
    noMore() {
      return this.count >= 10;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        // 向后端请求
        this.count += 4;
        this.loading = false;
      }, 1000);
    },
    toReading() {
      const reading = this.$router.resolve("/reading");
      window.open(reading.href, "_blank");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "pingfang";
  src: url("../assets/fonts/pingfang.ttf");
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

.text {
  font-size: 14px;
  font-family: "pingfang";
  cursor: pointer;
  transition: color 0.2s;
}

.text:hover {
  color: #a0a0a0;
  transition: color 0.2s;
}

.item {
  margin-bottom: 18px;
  font-size: 1.1em;
}

.title {
  transition: color 0.2s;
}

.title:hover {
  color: #a0a0a0;
  transition: color 0.2s;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: calc(100% - 2px);
  margin-bottom: 12px;
}

.te >>> textarea {
  font-family: "pingfang";
  font-size: 1.5em;
}

.te >>> textarea::-webkit-input-placeholder {
  color: #cdcdcd;
}

.scrollbar >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>