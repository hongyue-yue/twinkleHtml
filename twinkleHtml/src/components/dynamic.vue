<style>
.outer{width:100%;margin-top:0.42rem;}
.dynamic{width:96%;margin:0.42rem 0.42rem 0 0.42rem ;position:relative;}
.dy_top img{margin-right:0.42rem ;}
.dy_top>img{width: 2.222rem;height:2.222rem}
.dy_words{height:2.22rem;position:absolute;left:15%;top:0.14rem;}
.dy_words p{height:1.11rem;line-height:1.11rem;margin:0}
.dy_words .p1{font-size:0.694rem;color:#daa449;}
.dy_words .p2{font-size:0.556rem;color:#9497aa;}
.dy_lable{width:100%;height:0.833rem;}
.top_lable{display:block;border-radius:0.222rem;padding:0.222rem;
           border:1px solid #ebc27e;margin:0.222rem 0.138rem 0 0;float:left;font-size:0.556rem;}
.top_lable>img{margin:0 0.138rem -0.111rem 0;width: 0.667rem;height: 0.667rem}

.dy_middle{width:100%;margin:1.111rem 0 0 0;}
.dy_middle p{height:1.111rem;line-height:1.111rem;font-size:0.778rem;margin:0;}
.dy_star{width:98%;height:1.667rem;margin:0.444rem 0 0.333rem 0;}
.dy_star span{float:right;font-size:0.778rem;
              width:2.222rem;line-height:1.111rem;text-align:center;}
.dy_star img{width: 0.833rem;height: 0.833rem}
.bottom_pre p{font-size:0.667rem;height:0.833rem;line-height:0.833rem;color:#72736c;
              padding:0;margin:0;}
.bottom_pre p span{font-size:0.667rem;color:#d68a5a;}
.dy_bottom>span{display:block;margin-left:80%;font-size:0.444rem;
                height:0.694rem;line-height:0.694rem;}
.bottom_img img{width:15%;height:2.222rem}
</style>
<template>
<div class="outer">
  <div class="dynamic">
      <div class="dy_top">
         <img :src="dyna.src" />
         <div class="dy_words">
            <p class="p1">{{dyna.friend}}</p>
            <p class="p2">{{dyna.date}}</p>
         </div>
         <div class="dy_lable">
           <span class="top_lable" v-for="lable in dyna.lable"><img src="../assets/praise.png" />{{lable.words}}</span>
         </div>
      </div>
      <div class="dy_middle">
         <p>{{dyna.words}}</p>
         <div class="middle_img">
           <img :src="img.url" v-for="img in dyna.image" :width="img.width" :height="img.height"/>
         </div>
         <div class="dy_star">
           <span v-link="{'name': 'dynaNote', params: {id: dyna.id}}"><img src="../assets/compile.png"/>{{dyna.comNumber}}</span>
           <span><img src="../assets/star.png"/>{{dyna.shaNumber}}</span>
           <span><img src="../assets/praise.png" />{{dyna.praNumber}}</span>
         </div>
      </div>
      <div class="dy_bottom" v-show="bottShow">
        <div class="bottom_img">
           <img :src="face.url"  v-for="face in dyna.like"/>
        </div>
        <div class="bottom_pre">
          <p v-for="person in comments" track-by="$index"><span>{{person.name}}:</span>{{person.words}}</p>
        </div>
        <span v-show="moreShow">想看更多....</span>
      </div>
  </div>
</div>
</template>

<script>
export default {
  props:{
    "dyna":{
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comments:[],
      bottShow:true,
      moreShow:true,
         }
  },
  ready(){
    this.load()
  },
  methods: {
    filter(){
      if(this.dyna.comments.length>3){
      for(let i=0;i<=2;i++){
        this.comments.push(this.dyna.comments[i])
      }
    }else{
      for(let i=0;i<this.dyna.comments.length;i++){
        this.comments.push(this.dyna.comments[i])
      }
    }
    },
    load(){
      if(this.dyna.like.length==0&&this.dyna.comments.length==0){
        this.bottShow=false
      }else if(this.dyna.comments.length<=3){
        this.moreShow=false
      }
      this.filter()
    },
  },
};
</script>
