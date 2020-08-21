<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="title">{{ title }}</span>
              <!-- <el-button
                @click="handleBack()"
                style="float: right; padding: 3px 0; font-weight: bold; font-size: 1.2em; font-family: 'pingfang';"
                type="text"
              >
                <i class="el-icon-back"></i> 返回
              </el-button> -->
              <br />
              <br />
              <span class="author">分享者：{{ author }}</span>
            </div>
            <div class="text">
              <span id="content"></span>
              <el-button
                style="padding-top: 20px; padding: 3px 0; font-weight: bold; font-size: 1.1em;"
                type="text"
                @click="handleLikes()"
              >
                有用 {{ likes }}
                <i class="fa fa-thumbs-up"></i>
              </el-button>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "对住校高中生特别适用的背单词方式",
      author: "共产主义接班人",
      content:
        "<p>共产主义的目的是要按照共产主义者的理想，创造一个新的社会。但是要使我们的理想社会又实现之可能，第一步就得产出现在的资本制度。要铲除现在的资本制度，只有用强力打倒资本家的国家。劳动群众--无产阶级--的势力正在那里发展和团聚起来，这个势力是会使资本主义寿终正寝的。这种势力是在那里继续增长，这正是资本家的国家内部阶级冲突的结果。这个势力表现出来的方式，就是阶级争斗。</p> \
        <p>所以阶级争斗就是打倒资本主义的工具。阶级争斗从来就存在人类社会中间，不过已经改变了几次状态，因为这是以生产工具的发达为转移的。在封建国家的时候，阶级争斗也是一样的存在；但是与在资本家的国家下面的阶级争斗是有分别的，因为资本家的国家下面阶级争斗是格外紧迫，其势足以动摇全世界。这种势力的增长，日渐坚实，终归会把资本主义铲除了去。这种争斗的增长，是历史的法则。</p>\
        <p>共产党的任务是要组织和集中这阶级斗争的势力，使那攻打资本主义的势力日增雄厚。</p>\
        <p>这一定要向工人、农人、兵士、水手和学生宣传，才成功的；目的是要组织一些大的产业组合，并联合一个产业组合的总联合会，又要组织一个革命的无产阶级的政党--共产党。共产党将要引导革命的无产阶级去向资本家争斗，并要从资本家手里获得政权--这政权是维持资本家的国家的；并要将这政权放在工人和农人的手里，正如一九一七年俄国共产党所做的一样。</p>\
        <p>革命的无产阶级的产业组合定要用大罢工的方法，不断的扰乱资本家的国家，使劳动群众的敌人日趋。要是到了可以从资本家手中夺得政权的最后争斗的时机，由共产党的号召，宣布总同盟罢工，这就是给资本制度一个致命的打击。</p>\
        <p>并且当了资本家被打倒了以后，这些产业组合就变成了共产主义的社会中主管经济生命的机关。资本家政府的被推翻，和政权之转移于革命的无产阶级之手；只不过是共产党的目的之一部分，已告成功；但是共产党的任务是还没有完成，因为阶级争斗还是继续的，不过改换了一个方式罢了--这方式就是无产阶级专政。</p>",
      likes: 1080
    };
  },
  mounted() {
    var content = document.getElementById("content");
    content.innerHTML = this.content;
  },
  methods: {
    handleLikes() {
      this.likes++;
    },
    // handleBack() {
    //   window.history.back(-1);
    // }
  }
};
</script>

<style scoped>
@import "font-awesome/css/font-awesome.css";

.el-row {
  margin-bottom: 20px;
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
  font-size: 1.1em;
  font-family: "pingfang";
  color: #383838;
  line-height: 28px;
  text-align: justify;
}

.item {
  margin-bottom: 18px;
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
  width: 100%;
}

.title {
  font-weight: bold;
  font-size: 1.2em;
  font-family: "pingfang";
}

.author {
  font-weight: 400;
  font-size: 1.1em;
  color: #bcbcbc;
  font-family: "pingfang";
}

.box-card >>> .el-card__header {
  border-bottom: none;
}
</style>