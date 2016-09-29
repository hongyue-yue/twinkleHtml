<template>
  <div id="app">
      <div id="bott">
        <span v-on:click="navRout('friends')">好友圈</span>
        <span v-on:click="navRout('near')">靠近</span>
        <span v-on:click="navRout('find')">发现</span>
      </div>
      <router-view></router-view>
  </div>

</template>

<script>
import store from "./vuex/store"
export default {
   store:store,
   ready(){
       this.initNav()
   },
   methods:{
     initNav () {
          this.$route.router.go({name:'friends'})
    },
     navRout( name){
       this.$route.router.go({name:name})

     }
   },
}
</script>
<style>

#app{
     padding:0;margin:0;display:black;height:35.56rem;
     width:20rem;
     border:1px solid black;position:relative;
     overflow:hidden;
     }
#bott{width:100%;font-size:0.78rem;background-color:#8b888b;
      position:absolute;bottom:0;z-index:10;}
#bott span{float:left;height:4.2rem;
           line-height:4.2rem;width:33.3%;
           text-align: center;
          }

</style>
