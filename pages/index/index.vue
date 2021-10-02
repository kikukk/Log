<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- <view><text>{{result}}</text></view> -->
		<button @click="addData()">add data</button>
		<button @click="getData()">get data</button>
		<button @click="del()">del data</button>
		<button @click="revertDisplay()">revert display</button>
	</view>
</template>

<script>
	const pillService = require('../../service/pillService.js');
	const roomService = require('../../service/roomService.js');
	const boxService = require('../../service/boxService.js');
	export default {
		data() {
			return {
				title: 'Hello',
				result: {},
			}
		},
		async created() {
		},
		onLoad() {

		},
		methods: {
			addData(){
			},
			async getData(){
			},
			del(){
			},
			revertDisplay(){
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
