<template>
    <div class="display-pill my-border">
        <div class="line">
            <el-input :disabled="!editable" class="pill-info" v-model="pill.name"/>
            <el-button :disabled="!editable" class="button" :class="importantClass" @click="revertImportant">
                重要
            </el-button>
        </div>
        <div class="line">
            <el-input :disabled="!editable" class="pill-info" v-model="pill.type"/>
            <el-button v-if="!editable" class="my-button-border button" @click="editable=true">修改</el-button>
            <el-button v-if="editable" class="my-button-border button" @click="savePill">保存</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            pill: {},
            isNew: false,
        },
        data() {
            return {
                editable: this.isNew&&_.isEmpty(this.pill.name),
            }
        },
        methods: {
            revertImportant() {
                this.pill.important = this.pill.important === 0 ? 1 : 0;
            },
            savePill() {
                this.editable = false;
            },
        },
        computed:{
            importantClass() {
                return {'my-border': this.pill.important === 0, 'my-button-border': this.pill.important === 1}
            },
        },
    }
</script>

<style scoped lang="scss">
  .display-pill {
    margin: 3% 9%;
    .line{
      margin: 3% 0px;
    }
    /deep/ .el-input__inner{
      width: 100%;
      border: 1px blue solid;
      border-radius: 5px;
      text-align: center;
      background-color: unset;
    }
    .pill-info {
      display: inline-block;
      width: 65%;
      margin: 1% 13px;
    }
    .button {
      width: 70px;
    }
  }

</style>