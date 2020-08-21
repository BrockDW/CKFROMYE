<template>
  <div class="backtop">
    <el-row :gutter="10">
      <el-col :span="15">
        <div class="grid-content">
          <el-card class="box-card-parent" style="height: 100%">
            <div slot="header" class="clearfix">
              <span
                style="font-weight: bold; font-size: 1.2em; font-family: 'pingfang';"
              >{{ contentData.length }} 个有用</span>
              <el-dropdown
                trigger="click"
                style="float: right; padding: 3px 20px; font-size: 1.2em; font-weight: bold; color: #e4e4e4"
              >
                <span class="el-dropdown-link" style="font-family: 'pingfang'">
                  {{ sortTpye }}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <el-button type="text" @click="timeSort()">时间排序</el-button>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-button type="text" @click="randomlySort()">随机排序</el-button>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-button type="text" @click="usefulSort()">有用优先</el-button>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <list ref="list"></list>
          </el-card>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content">
          <note></note>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import list from "./list.vue";
import note from "./note.vue";

export default {
  name: "readingList",

  components: {
    list,
    note
  },

  data() {
    return {
      contentData: [],
      loading: false,
      sortTpye: "时间排序"
    };
  },

  mounted() {
    this.contentData = this.$refs.list.contentData;
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

    timeSort() {
      this.sortTpye = "有用优先";
      this.$refs.list.contentData.sort(
        this.$options.methods.sortBy("likes", true)
      );
    },

    randomlySort() {
      this.sortTpye = "随机排序";
      var m = this.$refs.list.contentData.length,
        t,
        i;

      while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.$refs.list.contentData[m];
        this.$refs.list.contentData[m] = this.$refs.list.contentData[i];
        this.$refs.list.contentData[i] = t;
      }

      return 0;
    },

    sortBy(attr, rev) {
      if (rev == undefined) {
        rev = 1;
      } else {
        rev = rev ? 1 : -1;
      }

      return function(a, b) {
        a = a[attr];
        b = b[attr];
        if (a < b) {
          return rev * -1;
        }
        if (a > b) {
          return rev * 1;
        }
        return 0;
      };
    },

    usefulSort() {
      this.sortTpye = "有用优先";
      this.$refs.list.contentData.sort(
        this.$options.methods.sortBy("likes", false)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card-parent {
  width: calc(100% - 2px);
  margin-bottom: 12px;
}

.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>