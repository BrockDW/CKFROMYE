<template>
  <el-input
    type="textarea"
    :autosize="{ minRows: 19, maxRows: 19}"
    placeholder="随便记点笔记吧......"
    v-model="textarea"
    class="te"
  ></el-input>
</template>

<script>
export default {
  name: "note",
  data() {
    return {
      textarea: ""
    };
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "pingfang";
  src: url("../assets/fonts/pingfang.ttf");
}

.te >>> textarea {
  font-family: "pingfang";
  font-size: 1.5em;
}

.te >>> textarea::-webkit-input-placeholder {
  color: #cdcdcd;
}
</style>