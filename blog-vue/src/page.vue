<template>
  <div class="page">
    <img src="./assets/profile.png" width="300" height="300" >
    <p class="p1">I AM A WEB CODER!</p>
    <p class="p2">Web Developer - Graphic Artist - User Experience Designer</p>
    <!--<div class="page-top">
      <p class="p1">I AM A WEB CODER!</p>
      <p class="p2">YOU CAN CONNECT ME BY 819937282@qq.com</p>
    </div>

    <div class="page-middle">
      <div class="page-resume">
        <img src="./assets/images8.gif" width="280" height="210"/>
        <span v-on:click="navRout('resume','2')">个人简历</span>
      </div>
      <div class="page-unit">
        <img src="./assets/images9.gif" width="280" height="210">
        <span v-on:click="navRout('unit','3')">前端组件</span>
      </div>
      <div class="page-product" >
        <img src="./assets/images10.gif" width="280" height="210">
        <span v-on:click="navRout('product','4')">个人作品</span>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
   methods:{
     navRout (name,val) {
       this.$route.router.go({name: name})

       let x=document.getElementsByClassName('nav-tab')
       for(let i=0;i<x.length;i++){
         x[i].className='nav-tab'
         x[i].childNodes[0].className='show'
       }
       for(let i=0;i<x.length;i++){
         if(x[i].value==val){
           let pan=x[i].childNodes[0]
           let resume=x[i].childNodes[1]
           x[i].className='nav-tab nav-tab-show'
           pan.className=''
         }
       }
       /*let li=e.target||e.path[0]
       let pan=li.childNodes[0]
       let resume=li.childNodes[1]
       li.className='nav-tab nav-tab-show'
       pan.className=''*/
     },
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.page{width:100%;margin-top:50px;}
.page img{margin-left:35%;}
.page p{text-align:center;margin-top: 10px;}
.p1{height:60px;line-height:60px;font-size:50px;font-weight: bold;}
.p2{height:40px;line-height:40px;font-size:30px}
/*
.page-top{width:100%;margin-top:30px;}
.page-top p{text-align:center;}
.p1{font-size:50px;font-weight: bold;color: rgb(99, 113, 207);height:70px;line-height:70px;}
.p2{font-size:18px;font-weight: bold;height:50px;line-height:50px;}

.page-middle{width:100%;position:relative;}
.page-resume{width:33%;height:250px;position:absolute;top:40px;left:0px;}
.page-middle img{display:block;margin:0 auto;}
.page-middle span{display:block;text-align:center;height:40px;line-height:40px;
                  font-size:20px;color:rgb(100, 102, 100)}
.page-unit{width:33%;height:250px;position:absolute;top:40px;left:345px;}
.page-product{width:33%;height:250px;position:absolute;top:40px;left:690px;}*/
</style>
