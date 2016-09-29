<style >
.top{
      width:20rem;height:3.33rem;position:absolute;
      top:0;z-index:5;
    }
.top img{width:1.67rem; height:1.67rem;}
.img1{float:left;margin:0.14rem 0 0 0.28rem;}
.img2{float:right;margin:0.14rem 0.28rem 0 0;}
#middle{overflow:scroll;width:100%;height:31.4rem;
        position:absolute;top:0;}
#middle>img{width:100%;height:11.1rem }
#middle::-webkit-scrollbar {display:none}

#middle .coders{width:70%;height:3.33rem;z-index:2;position:absolute;top:8.33rem;right:0.56rem;}
#middle .coders>img{width:2.22rem;height:2.22rem;float:right}
#middle .coders span{float:right;font-size:0.56rem;color:#17e8ca;
                     height:0.78rem;line-height:0.78rem;display:block;
                     position:absolute;right:2.78rem;
                    }
#middle .space{width:20rem;margin:0.56rem 0 0.28rem 0;}
.space>span{display:block;width:20rem;height:0.78rem;line-height:0.78rem;text-align:center;
            font-size:0.33rem;}


</style>
<template>

    <div class="top">
      <img class="img1" src="../assets/images1.png" >
      <img class="img2" src="../assets/images2.png" v-on:click="comment()"/>
    </div>
    <div id="middle">
        <img src="../assets/P_01.jpg" />
        <div class="coders">
          <img v-bind:src="user.usersImg" />
          <span style="margin-top:0.33rem ">{{user.users}}</span>
          <span style="margin-top:1.25rem">已连续登录{{user.day}}天,{{user.person}}人访问</span>
        </div>
        <div class="space">
           <space :dynamic="value" v-for=" (key, value) of newsFeed" track-by="$index"></space>
           <span v-show="shows">加载中.....</span>
        </div>
    </div>
</template>

<script>
import space from "./space.vue"
import {newsFeedPush,newsFeedUnshift,userPush} from "../vuex/action"

export default {
  vuex: {
      getters: {
          user: state=>state.user,
          newsFeed: state => state.newsFeed
      },
      actions: {
          newsFeedPush,
          newsFeedUnshift,
          userPush
      },
    },
  data () {
    return{
      feedId:3,
      shows:false,
      color:{
         backgroundColor:'',
         transition:'backgroundColor 2s'
      },
    };
  },
  ready(){
      document.getElementById("middle").addEventListener('scroll', this.onScroll)
      //this.onScroll()
  },
  components:{
    space
  },
  methods:{
    comment(){
      this.$route.router.go({name:"comments"})
    },
    onScroll(){
      if(this.checkScroll()){
        this.shows=true
        /*let arr=[]
        for(let i=0;i<2;i++){
          arr.push(this.newsFeed[i])
        }
        this.newsFeedPush(arr)*/
        /*let url=
        this.$http.get(url).then((response)=>{
          let data=response.data()
          let arr=[]
          arr=data.newsFeed
          this.newsFeedPush(arr)
        })*/
      }
    },
    /*load(){
      let url=""
      this.$http.get(url).then((response)=>{
         let data=response.data
         let obj={}
         obj=data.user
         this.userPush(obj)
         let arr=[]
         arr=data.newsFeed
         this.newsFeedPush(arr)
      })
    },*/
    checkScroll(){
      let page=document.getElementsByClassName("page")
      let lastSpaceH=page[page.length-1].offsetTop+Math.floor(page[page.length-1].offsetHeight)

      let scrollTop=document.getElementById("middle").scrollTop
      let middleH=document.getElementById("middle").clientHeight
      return (lastSpaceH<=scrollTop+middleH)?true:false
    },
  },
};
</script>
