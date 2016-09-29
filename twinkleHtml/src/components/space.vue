<style>
.page{width:100%;position:relative;margin-top:0.83rem;display: block;border-bottom: 1px solid red;}
.page>img{display:block;position:absolute;left:0.28rem;width:1.94rem; height:1.94rem}
.page .right{width:85%;margin-left:2.78rem;}
.right .p1{font-size:0.72rem;color:#d68a5a;padding:0;margin:0;height:0.83rem;line-height:0.83rem;}
.right .p2{font-size:0.56rem;color:#9aa2a0;padding:0;margin:0.14rem;height:0.67rem;line-height:0.67rem;}
.right .p3{font-size:0.78rem;height:0.89rem;line-height:0.89rem;padding:0;margin:0.28rem 0 0.28rem 0;}
.ul1{width:100%;}
.star{width:100%;height:1.11rem;margin-bottom:0.28rem}
.star span{float:right;font-size:0.78rem;
           width:2.22rem;line-height:1.11rem;text-align:center;}
.star img{width: 0.694rem;height: 0.694rem}
.bottom{width:100%;margin-bottom: 0.56rem;background-color:#eff0e9;}
.bottom .ul2{width:100%;display:block;border-bottom:1px solid #e0e0db;}
.person p{font-size:0.61rem;height:0.83rem;line-height:0.83rem;color:#72736c;
          padding:0;margin:0 0 0 0.28rem;
         }
.person p span{font-size:0.61rem;color:#d68a5a}
.bottom>span{display:block;margin-left:80%;font-size:0.44rem;
             height:0.694rem;line-height:0.694rem;}
</style>
<template >
   <div class="page">
      <img :src="dynamic.src" >
      <div class="right">
        <p class="p1">{{dynamic.friend}}</p>
        <p class="p2">{{dynamic.date}}</p>
        <p class="p3">{{dynamic.words}}</p>
        <div class="ul1">
           <span v-for="img in dynamic.image"><img :src="img.url" :width="img.width" :height="img.height"/></span>
        </div>
        <div class="star">
          <span v-link="{'name': 'newsNote', params: {id: dynamic.id}}"><img src="../assets/compile.png" />{{dynamic.comNumber}}</span>
          <span><img src="../assets/star.png" />{{dynamic.shaNumber}}</span>
          <span><img src="../assets/praise.png" />{{dynamic.praNumber}}</span>
        </div>
        <div class="bottom" v-show="bottShow">
          <div class="ul2">
             <span v-for="face in dynamic.like"><img :src="face.url" width="20%" height="120"/></span>
          </div>
          <div class="person">
            <p v-for="com in comments" track-by="$index"><span>{{com.name}}:</span>{{com.words}}</p>
          </div>
          <span v-show="moreShow" v-link="{'name': 'newsNote', params: {id: dynamic.id}}">想看更多....</span>
        </div>
      </div>
   </div>
</template>

<script>
export default {
      props:{
        "dynamic":{
          type: Object,
          required: true
        }
      },
      data(){
        return{
          comments:[],
          bottShow:true,
          moreShow:true,

        };
      },
  created() {
     this.load()
  },
  methods: {
    filter(){
      if(this.dynamic.comments.length>3){
      for(let i=0;i<=2;i++){
        this.comments.push(this.dynamic.comments[i])
      }
    }else{
      for(let i=0;i<this.dynamic.comments.length;i++){
        this.comments.push(this.dynamic.comments[i])
      }
    }

    },
    load(){
      if(this.dynamic.like.length==0&&this.dynamic.comments.length==0){
        this.bottShow=false
      }else if(this.dynamic.comments.length<=3){
        this.moreShow=false
      }
      this.filter()
      //console.log(this.comments)
    },
  },
};
</script>
