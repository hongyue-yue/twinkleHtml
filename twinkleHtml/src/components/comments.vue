<style>
#comments{z-index:20;width:20rem;height:35.556rem;
          position:relative;opacity: 1;background-color: #fff;
          backface-visibility:hidden;
         }
.top2{width:100%;height:2.778rem;background-color:#f0ef79;}
.top2 img{width:1.389rem;height:1.389rem;margin:0.694rem 0 0 0.833rem;}
.top2 span{width:2.222rem;height:1.667rem;line-height: 1.667rem;float:right;
           margin:0.556rem 0.833rem 0 0;text-align:center;font-size:1.111rem;color:#407fc8;}
.bott{width:100%;height:14.722rem;position:absolute;bottom:0;border:1px solid #c2c7c2}
ul,li{margin:0;padding:0}
li{float:left;display:block;}
#item{width:100%;height:10.556rem;overflow:hidden}
/*#item::-webkit-scrollbar {display:none}*/
.bott .express{height:10.556rem;width:100rem;transition-property: transform;
               transition-duration: .3s;transition-timing-function:ease-out;}
/*::-webkit-scrollbar {display:none}*/
.pho{width:20rem;height:10.556rem;}
.pho_inner{width:25%;height:5rem;line-height:5rem;display:block;float:left;text-align:center;}

.express img{width:4.722rem;height:4.722rem;}
.bott .happy{width:100%;position:absolute;bottom:0;}
.bott .happy span{display:block;width:25%;height:4.167rem;line-height:4.167rem;
                  text-align:center;float:left;background-color:#7d7b81;
                  font-size:1.056rem;}
.current{color:#407fc8;}
.midd{margin-top: 0.556rem;position:relative}
textarea{width:12rem;height:15rem;font-size:1rem;}
.midd2{margin-left: 0.556rem;width: 4.167rem;height:4.167rem;display:block;}
.midd2 img{width: 4.167rem;height:4.167rem}
.midd textarea{position:absolute;right:0.278rem;top:0.278rem;}

</style>
<template>
  <div id="comments">
        <div class="top2">
          <img src="../assets/return.png" v-on:click="back()" />
          <span v-on:click="submit()">发布</span>
        </div>
        <div class="midd">
           <span class="midd2"><img id="myimg" src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0025.png" /></span>
           <textarea  v-model="comments.words"></textarea>
        </div>
        <div class="bott">
           <div id="item">
             <ul class="express" v-bind:style="moving">
                <li class="pho">
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0001.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0002.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0003.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0004.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0005.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0006.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0007.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0008.png" v-on:click="select($event)"/></span>
                </li>
                <li class="pho">
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0009.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0010.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0011.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0012.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0013.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0014.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0015.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0016.png" v-on:click="select($event)"/></span>
                </li>
                <li class="pho">
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0017.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0018.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0019.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0020.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0021.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0022.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0023.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0024.png" v-on:click="select($event)"/></span>
                </li>
                <li class="pho">
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0025.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0026.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0027.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0001.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0002.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0003.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0004.png" v-on:click="select($event)"/></span>
                  <span class="pho_inner"><img src="http://7xl1xg.com2.z0.glb.qiniucdn.com/Like/0005.png" v-on:click="select($event)"/></span>
                </li>
             </ul>
           </div>
          <div class="happy">
             <span v-on:click="clickScroll(1)" class="current">开心</span>
             <span v-on:click="clickScroll(2)">幸福</span>
             <span v-on:click="clickScroll(3)">难过</span>
             <span v-on:click="clickScroll(4)">愤怒</span>
          </div>
        </div>
  </div>
</template>

<script>
import { newsFeedUnshift } from "../vuex/action"

export default {
  vuex:{
        getters: {
           user:state=>state.user,
           newsFeed: state => state.newsFeed
        },
        actions: {
           newsFeedUnshift
    },
  },
  data() {
      return {
           moving:{
                   transform: 'translateX(0px)'
                 },
           comments:{
                  id:"",
                  src:this.user.usersImg,
                  friend:this.user.users,
                  date:"",
                  words:"",
                  praNumber:"",
                  shaNumber:"",
                  comNumber:"",
                  image:[{url:""}],
                  like:[],
                 comments:[],
                 }
         };
  },
  ready(){

  },
  methods: {
    submit(){
        let myimg=document.getElementById("myimg")
        this.comments.image[0].url=myimg.src
        this.comments.date=this.getDays()
        this.comments.id=Math.floor(Math.random()*100)
        this.newsFeedUnshift(this.comments)
        //console.log(this.newsFeed[0].image[0].url)
        this.back()
    },
    select(e){
        let curr= e.target||e.path[0]
        let url=curr.src
        document.getElementById("myimg").src=url

    },
    clickScroll(num){
        let x=20*(num-1)
        let ha=document.getElementsByClassName("happy")[0]
        let sp=ha.getElementsByTagName("span")
        for(let i=0;i<sp.length;i++){
          sp[i].className=""
        }
        sp[num-1].className="current"
        this.move(x)
        //console.log(this.comments.image.url)
    },
    move (x) {
            this.moving = {
                transform: `translateX(${-x}rem)`
            }
        },
    back(){
        this.$route.router.go({name:'friends'})
    },

    getDays(){
        let date=new Date()
        let mon=date.getMonth()+1
        let day=date.getDate()
        return (mon+"-"+day)
    },
  },
};
</script>
