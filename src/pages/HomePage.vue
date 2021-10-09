<template>
	<view class="content">
		<div class='time-zone-area'>
			<div class='time-zone-text'>{{todayDate}}</div>
		</div>
		<div class="top-bar">
			<el-select v-model="status" placeholder="回收状态" clearable popper-class="my-select home-status-item">
				<el-option
				      v-for="item in statusOption"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
			</el-select>
			<view class="record">
				<button class='record-button my-border' type='default' @click="toRecordPage">记录</button>
			</view>
		</div>
        <view>
            <room-with-status v-for='item in displayDatas' :key='item.id' :room='item'></room-with-status>
        </view>
        <button class='my-button-border create-record' @click="toAddLogPage">+</button>
        <button class='management my-button-border' @click="toManagementPage">管理</button>
	</view>
</template>

<script>
	const DateUtil = require('../utilities/DateUtil.js');
	import RoomWithStatus from '../component/RoomWithStatus.vue';
	export default {
		components: {
			RoomWithStatus,
		},
		data() {
			return {
				datas: [],
				displayDatas: [],
				status: null,
                todayDate: DateUtil.getCurrentLocalDate(),
			}
		},
		async created() {
			this.initData();
		},
		onLoad() {},
		methods: {
			initData(){
				this.datas = [{id:1,name:'科室1',status:1},{id:2,name:'科室2',status:0}];
				this.datas = _.sortBy(this.datas,function(n){
					return -n.status;
				});
				this.displayDatas = this.datas;
			},
			toRecordPage(){
				uni.navigateTo({url: './RecordPage'});
			},
			toAddLogPage(){
				uni.navigateTo({url: './AddLogPage'});
			},
            toManagementPage(){
                uni.navigateTo({url: './ManagementPage'});
            },
		},
		computed: {
			statusOption(){
				return [{value:null,label:'全部'},{value:1,label:'未回收'},{value:0,label:'已回收'}];
			}
		},
		watch:{
			status(){
				if(this.status===null)this.displayDatas = _.cloneDeep(this.datas);
				else this.displayDatas = this.datas.filter(item=>item.status===this.status);
			}
		}
	}
</script>

<style scoped lang="scss">
	.top-bar{
		.el-select{
			width: 40%;
			margin: 0px 5%;
			display: inline-block;
			/deep/ .el-input__inner{
				width: 90%;
				text-align: center;
				border: 1px solid blue;
				border-radius: 5px;
			}
		}
		.record{
			display: inline-block;
			width: 38%;
            height: 43px;
			margin: 0px 20px;
			vertical-align: -webkit-baseline-middle;
			.record-button{
				height: 29px;
				line-height: 29px;
				background-color: cornflowerblue;
			}
		}
	}
	.create-record{
		width: 80px;
		height: 80px;
		border-radius: 60px;
		background-color: #ffffff;
		position: absolute;
        right: 10%;
        bottom: 9%;
        font-size: 32px;
	}
	.management{
		position: fixed;
		bottom: 20px;
		left: 10px;
		width: 50%;
		height: 35px;
		line-height: 35px;
		background-color: #ffffff;
	}
</style>
