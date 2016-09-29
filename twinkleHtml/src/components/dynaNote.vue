<style>
#dyna_note{z-index:20;width:20rem;height:35.556rem;position:relative;opacity: 1;backface-visibility:hidden;background-color: #fff;}
#dyna_note .note_top{width:100%;height:2.778rem;background-color: #eee67d;position: absolute;}
#dyna_note .note_top img{margin:0.694rem 0 0 0.833rem;width:1.389rem;height:1.389rem;}

#dyna_note .note_middle{width:100%;height:30rem;position:absolute;top:2.778rem;overflow:scroll;
             background-color: #edecea;}
#dyna_note .note_middle::-webkit-scrollbar {display:none}

#dyna_note .note_edit{position:absolute;bottom:0;width:100%;height:2.778rem;background-color:#fff}
#dyna_note .in1{width:13.889rem;height:1.667rem;font-size:0.833rem;position:absolute;top:0.555rem;left:1.388rem;
           border-radius: 8px;border:1px solid #cacdd0 }
#dyna_note .in2{width:2.778rem;height:1.667rem;position:absolute;top:0.694rem;right:0.694rem;font-size:0.778rem}
</style>
<template>
  <div id="dyna_note">
         <div class="note_top">
            <img @click="this.back()" src="../assets/return.png" />
         </div>
         <div class="note_middle">
             <comment :com="value" v-for="(key,value) of dynamic" track-by="$index"></comment>
         </div>
         <div class="note_edit">
           <input class="in1" type="text" value="评论" v-model="comment.words">
           <!--<input class="in2" type="button"  value="submit"  @click="this.submit()">-->
           <button class="in2" type="button" @click="this.submit()">submit</button>
         </div>
  </div>
</template>

<script>
import comment from "./comment"
import { dynamicCommentsUnshift } from "../vuex/action"

export default {
  vuex:{
    getters: {
        dynamicFeed: state => state.dynamicFeed,
        user: state => state.user
    },
    actions:{
         dynamicCommentsUnshift
    }
  },
  data() {
    return {
      id:"",
      dynamic:[],
      comment:{
        url:this.user.usersImg,
        name:this.user.users,
        words:"",
        date:"",
      },
    };
  },
  created () {
    this.fetchNews(this.$route.params.id)
  },
  methods: {
        submit(){
          this.comment.date=this.getTime()
          this.dynamicCommentsUnshift(this.$route.params.id, this.comment)
          //console.log(this.newsFeed[1].comments.length)
          //this.fetchNews(this.$route.params.id)
        },
        getTime(){
          let date=new Date();
          let mon=date.getMonth()+1
          let day=date.getDate()
          let hours=date.getHours()
          let min=date.getMinutes()
          return (mon+"-"+day+" "+hours+":"+min)
        },
        back(){
          let bott=document.getElementById("bott")
          bott.style.display="inline"
          this.$route.router.go({name:'find'})
        },
        fetchNews(notesId){
           let bott=document.getElementById("bott")
           bott.style.display="none"
           for(let i=0;i<this.dynamicFeed.length;i++){
             if(this.dynamicFeed[i].id==notesId){
               this.dynamic=this.dynamicFeed[i].comments
             }
           }
        },

  },
  components: {
    comment
  }
};
</script>
