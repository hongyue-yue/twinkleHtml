<template>

     <div class="fram">
      <!--<img src="./assets/cabin.png" width="420" height="300"/>-->
       <div class="pack">
         <photos class="unit"></photos>
       </div>
       <p>图片轮播 1</p>
     </div>
     <div class="fram">

       <div class="pack">
         <photo class="unit"></photo>
       </div>
       <p>图片轮播 2(可鼠标暂停)</p>
     </div>
     <div class="fram">

       <div class="pack">
         <lect class="unit"></lect>
       </div>
       <p>下拉菜单(可键盘上下)</p>
     </div>
    <div class="fram">

       <div class="pack">
         <turn class="unit"></turn>
       </div>
       <p>翻转</p>
    </div>
    <div class="fram">

       <div class="pack">
         <grid class="unit"></grid>
       </div>
       <p>名单</p>
    </div>
    <div class="fram">

       <div class="pack">
         <water class="unit"></water>
       </div>
       <p>瀑布流</p>
    </div>


</template>

<script>
import photos from "./components/Photos.vue"
import photo from "./components/Photo.vue"
import lect from "./components/Select.vue"
import grid from "./components/Grid.vue"
import turn from "./components/Turn.vue"
import water from "./components/Waterfall.vue"

export default {
  components: {
    photos,
    photo,
    lect,
    turn,
    grid,
    water
  },
};
</script>

<style>
.fram{width:45%;height:350px;/*border: 1px solid #a4bad6;
      border-radius: 10px;box-shadow: 5px 5px 5px #ccc;*/
      margin:15px;float: left;position: relative
      }
/*.fram>img{margin:0 auto;backface-visibility: hidden;
          position:absolute;top:5%;left:5%}*/
.fram .pack{width:100%;
            /*z-index:5;
            width:210px;*/
            height:320px;
            position:absolute;
            top:0;left:0;
            backface-visibility: hidden;
            background-color: #fff;
            /*transform: rotateY(90deg);
            transition: transform 0.2s;*/
            }
/*.fram:hover .pack{transform:rotateY(0deg);cursor: pointer}*/
.fram .pack .unit{margin:auto;
                  position: absolute;
                  top:0;left:0;right:0;bottom:0;
                  }
.fram>p{   height:30px;line-height:30px;
           margin-top:320px;text-align: center;
           /*position: absolute;bottom:2px;margin:0 auto;*/
           font-size:16px;font-weight:bold;
           color:#5b79a1;opacity: 0.7;
           transition:all 1s;
           -moz-transition: all 1s; /* Firefox 4 */
           -webkit-transition:all 1s; /* Safari 和 Chrome */
           -o-transition: all as; /* Opera */
           }
.fram:hover p{color:black;opacity: 1;
            }
</style>
