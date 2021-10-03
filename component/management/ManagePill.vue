<template>
    <div class="manage-pill">
        <div class="title my-border">药品管理</div>
        <el-select v-model="type" placeholder="药品类型" class="type-select" popper-class="my-select manage-pill-select-item">
            <el-option
                    v-for="type in typeOptions"
                    :key="type.value"
                    :label="type.label"
                    :value="type.value"/>
        </el-select>
        <display-pill v-for="pill in displayPill" :key="pill.id" :pill="pill" :is-new="pill.isNew"></display-pill>
        <el-button class="my-button-border create-pill-button" @click="createPill">+</el-button>
    </div>
</template>

<script>
    const _ = require('lodash');
    const DisplayPill = require('./display/DisplayPill').default;
    export default {
        name: "ManagePill",
        components: {DisplayPill},
        data() {
            return {
                title: 'asdf',
                type: null,
                pills: [],
            }
        },
        created() {
            this.initData();
        },
        methods: {
            initData() {
                this.pills = [
                    {id: 1, name: 'pill1', type: 'type1', important: 1},
                    {id: 2, name: 'pill2', type: 'type1', important: 0},
                    {id: 3, name: 'pill3', type: 'type2', important: 1},
                    {id: 4, name: 'pill4', type: 'type2', important: 0},
                ];
            },
            createPill() {
                this.displayPill.push({name:'',type:'',important:0,isNew:1});
            },

        },
        computed: {
            typeOptions() {
                const typeOptionsData = _.uniqBy(this.pills, 'type').map(pill => {
                    return pill.type
                });
                const typeOptions = [{label:'全部', value: null}];
                typeOptionsData.forEach(function (type) {
                    typeOptions.push({label: type, value: type});
                })
                return typeOptions;
            },
            displayPill() {
                if (_.isEmpty(this.type)) return this.pills;
                else return this.pills.filter(pill => pill.type === this.type);
            },
        },
    }
</script>

<style scoped lang="scss">
  .manage-pill {
    .title {
      width: 80%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin: 4% 10% 0%;
    }
    .type-select{
      width: 36%;
      /deep/ .el-input__inner{
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin: 8% 25% 0;
        font-size: 15px;
        text-align: center;
        border: 1px blue solid;
        border-radius: 4px;
      }
    }
    .create-pill-button{
      width: 82%;
      height: 40px;
      margin: 0% 8%;
      position: fixed;
      bottom: 31px;
    }
  }

</style>