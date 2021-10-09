<template>
    <div>
        <div v-if="target===''">
            <button class='my-button-border target-button' @click="target='pill'">药品管理</button>
            <button class='my-button-border target-button' @click="target='room'">科室管理</button>
            <button class='my-button-border target-button' @click="target='box'">药箱模板管理</button>
        </div>
        <manage-pill v-if="target==='pill'"></manage-pill>
        <manage-room v-if="target==='room'"></manage-room>
        <manage-box v-if="target==='box'"></manage-box>
    </div>
</template>

<script>
   import ManageBox from '../component/management/ManageBox'
   import ManagePill from '../component/management/ManagePill';
   import ManageRoom from '../component/management/ManageRoom';
    export default {
        name: "",
        components:{ManageBox,ManagePill,ManageRoom},
        data(){
            return{
                target:'',
            }
        },
        watch: {
        },
    }
</script>

<style scoped lang="scss">
.target-button{
  width: 80%;
  margin-top: 20px;
}
</style>