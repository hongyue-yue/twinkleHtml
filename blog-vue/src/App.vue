<template>
<div class="conter">
     <nav class="nav-conter">
    <iframe width="200" scrolling="no" height="55" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=35&icon=1&num=3"></iframe>
      <ul>
         <li class="nav-tab" value="1" @click="navRout($event, 'page')"><!--<span class="show"></span>-->首页</li>
         <li class="nav-tab" value="2" @click="navRout($event, 'resume')">简历</li>
         <li class="nav-tab" value="3" @click="navRout($event, 'unit')">组件</li>
         <li class="nav-tab" value="4" @click="navRout($event, 'product'),link()">作品</li>
       </ul>
     </nav>
    <router-view></router-view>
</div>
</template>

<script>
export default{
  ready () {
     this.initNav()
  },
  methods: {
    link(){
      window.open("http://qinyueshang.github.io/twinkle")
    },
    navRout (e,name) {
        if(name){
           this.$route.router.go({name: name})
        }
        this.touNav(e)
    },
    initNav () {
      let x=document.getElementsByClassName('nav-tab')[0]
      let y=x.childNodes[0]
      x.className='nav-tab nav-tab-show'
      y.className=''
      this.$route.router.go({name:'page'})
    },
    touNav (e) {
      let x=document.getElementsByClassName('nav-tab')
      for(let i=0;i<x.length;i++){
        x[i].className='nav-tab'
        x[i].childNodes[0].className='show'
      }
      let li=e.target||e.path[0]
      let pan=li.childNodes[0]
      let resume=li.childNodes[1]
      li.className='nav-tab nav-tab-show'
      pan.className=''
    },
  }
}


</script>
<style>
  * {padding: 0;margin: 0;}
  .news{display:none;}
  .conter{width:80%;margin:0 auto;}
.nav-conter{width: 100%;height:80px;position:relative;}
  .nav-conter ul{margin-left: 20px;}
  iframe{position:absolute;bottom:0px;right:10px;}
  .nav-tab {
          position:relative;
          margin-top: 40px;
          float:left;
          list-style-type:none;
          width:100px;
          height:40px;
          line-height:40px;
          text-align: center;
          font-size: 18px;
          cursor: pointer;
      }
  .nav-tab-show{
          color:#8fe2eb;
          /*border:1px solid #bab7b5;
          border-bottom: none;*/
      }
  .nav-tab span{
          background-color:#fff;
          position: absolute;
          left:0;
          bottom:-1px;
          width:100px;height: 2px;
      }
  .nav-tab a{text-decoration:none;color:black}
   .show{display: none}


</style>
