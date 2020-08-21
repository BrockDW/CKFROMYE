<template>
  <el-row :gutter="10">
    <el-col :span="15">
      <div class="grid-content">
        <el-card class="box-card-parent">
          <list></list>
        </el-card>
      </div>
    </el-col>
    <el-col :span="9">
      <div class="grid-content">
        <note></note>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import list from "./list.vue";
import note from "./note.vue";

export default {
  name: "learnCausually",

  components: {
    list: list,
    note: note
  },

  data() {
    return {
      activeIndex: "/learnCausually"
    };
  }
};
</script>