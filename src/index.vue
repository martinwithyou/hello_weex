<template>
  <div class="wrapper" @click="update">
  	<image class="testImage" src="http://7xjyw1.com1.z0.glb.clouddn.com/20170412101827.png"></image>
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <div><input class="testInput" type="text" placeholder="瞎输入点什么"  /></div>
    <text class="desc">Now, let's use vue to build your weex app.</text>
    <head/>
    <video/>
  </div>
</template>

<style>
	.testImage{
    width:400px;
    height:300px;
  }
  .wrapper { align-items: center; margin-top: 0px; }
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
</style>

<script>
	import head from './component/head.vue'
	import video from './component/video.vue'
	var modal = weex.requireModule('modal')
  export default {
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: '对方水电宣传宣传费水电费噢噢噢噢'
    },
    created(){
      console.log('will show toast')
        modal.toast({
          message: 'ddddddddddd初始化成功。',
          duration:5
        })
    },
    components:{
    	head,
    	video
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>