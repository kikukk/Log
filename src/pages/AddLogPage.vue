<template>
    <div class="add-log-page">
        <div class='time-zone-area'>
            <div class='time-zone-text'>{{todayDate}}</div>
        </div>
        <div>
            <el-select v-model="selectType" placeholder="科室类型" @change="typeChange" class="room-select" popper-class="my-select add-log-type-item">
                <el-option
                        v-for="item in roomTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="newLog.roomId" placeholder="科室名" class="room-select" popper-class="my-select">
                <el-option
                        v-for="item in roomOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-select v-model="logType" placeholder="操作类型" class="log-type-select" popper-class="my-select">
            <el-option
                    v-for="item in logTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
        </el-select>
    </div>
</template>

<script>
	const _ = require('lodash');
    const DateUtil = require('../utilities/DateUtil');
	export default{
		data() {
			return {
				rooms:[],
				newLog:{
					roomId: null,
				},
				selectType:'',
                todayDate: DateUtil.getCurrentLocalDate(),
                logType: null,
			}
		},
		created() {
			this.initData();
		},
		methods:{
			initData(){
				this.rooms = _.cloneDeep([
					{id:1,type:'type1',name:'room1'},
					{id:2,type:'type1',name:'room2'},
					{id:3,type:'type2',name:'room3'}]);
			},
			typeChange(){
				// console.log('tag1');
				this.newLog.roomId = null;
			},
		},
		computed:{
			roomTypeOptions(){
				const keys =  _.uniqBy(this.rooms,'type').map(room=>{return room.type});
				const typeOptions = [{label:'全部', value:null}];
				keys.forEach(key => {
					typeOptions.push({label:key,value:key});
				});
				return typeOptions;
			},
			roomOptions(){
				const _this = this;
                let roomOptionsData = [];
                if(_.isEmpty(this.selectType)) roomOptionsData = this.rooms;
				else roomOptionsData = this.rooms.filter(function(room){
					return room.type===_this.selectType;
				})
				const roomOptions = [];
				roomOptionsData.forEach(function(room){
					roomOptions.push({label:room.name,value:room.id});
				})
				return roomOptions;
			},
            logTypeOptions(){
                return [{label:'回收药箱',value:0},{label:'送出药箱',value:1}];
            }
		},
	}
</script>

<style lang="scss" scoped>
	.room-select{
		width: 40%;
		display: inline-block;
		margin: 2% 4%;
		/deep/ .el-input__inner{
            width: 100%;
            font-size: 18px;
            text-align: center;
            height: 30px;
            line-height: 30px;
            border: 1px blue solid;
            border-radius: 4px;
		}
	}
    .log-type-select{
      /deep/ .el-input__inner{
        border: 1px blue solid;
        border-radius: 4px;
        width: 90%;
        height: 30px;
        margin: 2% 4%;
        text-align: center;
      }
    }
</style>