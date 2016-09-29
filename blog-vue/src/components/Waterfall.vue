<style type="text/css">
#main{
        position: relative;
        height:320px;width:370px;
        overflow:scroll;
    }
#main::-webkit-scrollbar{display: none}
.pin{
      padding: 5px 0 0 5px;
      float:left;
  }
  .box{
      padding: 3px;
      border:1px solid #ccc;
      box-shadow: 0 0 6px #ccc;
      border-radius: 3px;
  }
  .box img{
      width:162px;
  }
</style>
<template>
  <div id="main">
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_010.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_011.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_02.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_03.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_04.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_05.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_06.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_07.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_08.jpg"/>
        </div>
    </div>
    <div class="pin">
        <div class="box">
            <img src="../assets/image/P_09.jpg"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  ready() {
    let that=this
      setTimeout(function(){
        that.waterfall()
      },3000)
  },
  methods: {
    waterfall(){
    let oParent=document.getElementById("main");
    let aPin=oParent.getElementsByClassName("pin")
    let iPinW=aPin[0].offsetWidth;
    let num=Math.floor(oParent.offsetWidth/iPinW);
    let pinHArr=[]
    for(let i=0;i<aPin.length;i++){
        let pinH=aPin[i].offsetHeight
          //console.log(pinH)
        if(i<num){
            pinHArr[i]=pinH;
        }else{

            let minH=Math.min.apply(null,pinHArr);
            let minHIndex=this.getminHIndex(pinHArr,minH);
            aPin[i].style.position='absolute';
            aPin[i].style.top=minH+'px';
            aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
            pinHArr[minHIndex]+=aPin[i].offsetHeight;
            }
        }
      },
      getminHIndex(arr,minH){
       for(let i in arr){
           if(arr[i]==minH){
               return i;
             }
           }
      },

  },

};
</script>
