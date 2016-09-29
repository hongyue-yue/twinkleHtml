<template>
  <div class="flip-container">
        <div class="flipper">
            <div class="front">
              前
     <!-- 前面内容 -->
            </div>
            <div class="back">
              后
     <!-- 背面内容 -->
           </div>
       </div>
  </div>
</template>

<script>
export default {

};
</script>

<style >
.flip-container {font-size: 30px;color:blue;}
.flip-container:hover .flipper{transform: rotateY(180deg);}
.flip-container, .front, .back {width: 200px;height: 250px;}
.flipper {transition: 0.6s;transform-style: preserve-3d;position: relative;}
.front, .back {backface-visibility:hidden;position: absolute;top: 0;left: 0;}
.front {z-index: 2;background-image:url(../assets/P_05.jpg);background-size:200px 250px;}
.back {transform: rotateY(180deg);background-image:url(../assets/images12.jpg);background-size:200px 250px;}
</style>
