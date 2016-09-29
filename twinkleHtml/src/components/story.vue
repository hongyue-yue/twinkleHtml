<style>
.story{width:100%;margin-top:0.833rem;}
.story_inner{width:94%;border-bottom:1px solid blue;margin:0 auto;position:relative;}
.story_top img{width:2.222rem;height: 2.222rem}

.story_words{height:1.389rem;position:absolute;left:2.36rem;top:0.2778rem;}
.story_words p{height:0.944rem;line-height:0.944rem;margin:0;}
.story_words .p1{font-size:0.694rem;color:#daa449;}
.story_words .p2{font-size:0.556rem;color:#9497aa;}

.story_img{margin-top: 0.138rem;}
.story_img img{width:100%;height:10rem;}
.story_img p{ margin:0.5rem 0; font-size: 0.833rem;font-family: bold;}
</style>
<template>
  <div class="story">
     <div class="story_inner">
       <div class="story_top">
          <img :src="story.src" />
          <div class="story_words">
             <p class="p1">{{story.name}}</p>
             <p class="p2">{{story.date}} 更新</p>
          </div>
       </div>
       <div class="story_img">
         <img :src="story.imgSrc"/>
         <p>{{story.words}}</p>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  props:{
    "story":{
      type: Object,
      required: true
    }
  },
};
</script>
