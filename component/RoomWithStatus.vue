<template>
	<div class='room-with-status my-border' @click="toRoomDetailPage()">
		<div class='room-name'>{{room.name}}</div>
		<div :class='statusClass'>{{status}}</div>
	</div>
</template>

<script>
	export default {
		props: {
			room: {
				type: Object,
				required: true
			},
		},
		created(){
		},
		methods:{
			toRoomDetailPage(){
				console.log(this.room.id,this.room.name,this.status);
			}
		},
		computed:{
			status(){
				if(this.room.status)return '未回收完';
				else return '已回收完';
			},
			statusClass(){
				return {'room-status-1':this.room.status===1,'room-status-0':this.room.status===0};
			},
		}
	}
</script>

<style scoped lang="scss">
	.room-with-status{
		width: 88%;
		height: 60px;
		line-height: 60px;
		text-align: center;
        margin: 1% 5% 3%;
		.room-name{
			display: inline-block;
		}
		.room-status-1{
			display: inline-block;
			color: red;
		}
		.room-status-0{
			display: inline-block;
			color: #09F7F7;
		}
	}
</style>
