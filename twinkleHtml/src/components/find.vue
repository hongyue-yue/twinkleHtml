<style >
#sto{
       width:20rem;height:2rem;position:absolute;
       top:0px;z-index:5;background-color: #e8f45e;
      }
#sto .nav-story{margin-left:6.94rem;height:1.83rem;width:5.57rem;}
#sto .nav-story span{
                width:2.78rem;height:1.83rem;line-height:1.83rem;display:block;float:left;
                font-size:0.81rem;text-align:center;
               }
#sto .nav-moving{
            position:absolute;background-color: blue;
            height: 0.14rem;width:0.56rem;border-radius: 4px;
            transition-property: transform;
            transition-duration: .3s;
            transition-timing-function: ease-out;
           }

.dyna{
      position:absolute;top:1.67rem;width:40rem;height:29.72rem;
      transition-property: transform;
      transition-duration: .3s;
      transition-timing-function: ease-out;
     }
#dynamic{
         width:20rem;height:29.72rem;overflow:scroll;
         position:absolute;top:0;left:0;
         }
#dynamic .nth:nth-of-type(odd){background-color:rgba(242, 244, 236, 0.76)}
#dynamic .nth:nth-of-type(even){background-color:#fff}
#dynamic::-webkit-scrollbar {display:none}

#story{
       width:20rem;height:29.71rem;overflow:scroll;
       position:absolute;top:0;left:20rem;
      }
#story::-webkit-scrollbar {display:none}
</style>
<template>
    <div id="sto">
       <div class="nav-story">
         <span v-on:click="slide(1)">动态</span>
         <span v-on:click="slide(2)">故事</span>
       </div>
        <span class="nav-moving" v-bind:style="move"></span>
    </div>
    <div class="dyna" v-bind:style="moveSceond">
      <div id="dynamic">
        <dynamic :dyna="value" v-for="(key, value) of dynamicFeed"  track-by="$index" class="nth"></dynamic>
      </div>
      <div id="story">
        <story :story="value" v-for="(key, value) of storyFeed" track-by="$index"></story>
      </div>
    </div>
</template>

<script>
import dynamic from './dynamic.vue'
import story from './story.vue'
import { dynamicFeedPush,storyFeedPush } from '../vuex/action'

export default {
  vuex:{
    getters:{
        dynamicFeed: state => state.dynamicFeed,
        storyFeed: state => state.storyFeed
    },
    actions:{
       dynamicFeedPush,
       storyFeedPush
    }
  },
  data() {
    return {
      move: {
              transform:'translateX(8.06rem)'
            },
      moveSceond: {
            transform:'translateX(0px)'
      },
    };
  },
  ready() {
     document.getElementById("story").addEventListener('scroll',this.storyScroll)
     /*this.onload()*/
  },
  components: {
      dynamic,
      story
  },
  methods: {
    /*onload(){
      let url=
      this.$http.get(url).then((response)=>{
        let data=response.data()
        let dyArr=[]
        let stArr=[]
        dyArr=data.dynamicFeed
        stArr=data.storyFeed
        this.dynamicFeedPush(dyArr)
        this.storyFeedPush(atArr)
      })
    },*/
    storyScroll(){
      if(this.checkScroll("story","story")){
        let arr=[]
        for(let i=0;i<this.storyFeed.length;i++){
          arr.push(this.storyFeed[i])
        }
        this.storyFeedPush(arr)
        /*this.onload()*/
      }
    },
    checkScroll(claName,id){
      let page=document.getElementsByClassName(claName)
      let lastSpaceH=page[page.length-1].offsetTop+Math.floor(page[page.length-1].offsetHeight)

      let scrollTop=document.getElementById(id).scrollTop
      let middleH=document.getElementById(id).clientHeight
      console.log(lastSpaceH)
      console.log(scrollTop+middleH)
      return (lastSpaceH<=scrollTop+middleH)?true:false
    },
    moving (x) {
          this.move = {
              transform: `translateX(${x+8.06}rem)`
          }
    },
    run(y) {
          this.moveSceond={
            transform: `translateX(${-y}rem)`
          }
    },
    slide(num,name){
          let x=2.78*(num-1)
          let y=20*(num-1)
          this.moving(x)
          this.run(y)
    },


}
}
</script>
