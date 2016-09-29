<template >
  <div id="com">
       <img :src="com.url" />
       <div class="words">
           <p class="com1">{{com.name}}</p>
           <p class="com2">{{com.date}}</p>
           <p class="com3">{{com.words}}</p>
       </div>
  </div>
</template>

<script>
export default {
  props:{
    "com":{
      type:Object,
      required:true
    },
  },
  data() {
    return {
    };
  },

  ready() {},
  methods: {},
  components: {}
};
</script>

<style>
#com{position:relative;height:3.611rem;}
#com img{margin:0.278rem 0 0 0.278rem;width: 2.222rem;height:2.222rem}
.words{position:absolute;left:2.788rem;top:0.556rem;}
.words p{margin:0;display:block;}
.words .com1{font-size:0.667rem;height:1.11rem;line-height:1.11rem;color:#d68a5a;}
.words .com2{font-size: 0.5rem;height:0.833rem;line-height:0.833rem;color:#9aa2a0;}
.words .com3{font-size:0.667rem;height:1.111rem;line-height:1.111rem;}
</style>
