<template>

            <div id="phot">

                    <span class="photo_inner">
                        <img src="../assets/game.png" width="450" height="300">
                    </span>

                    <span class="photo_inner">
                        <img src="../assets/safe.png" width="450" height="300">
                    </span>

                    <span class="photo_inner">
                        <img src="../assets/submarine.png" width="450" height="300">
                    </span>

                    <!--<span class="photo_inner">
                        <img src="../assets/image/P_00.jpg" >
                    </span>

                    <span class="photo_inner">
                        <img src="../assets/image/P_04.jpg" >
                    </span>

                    <span class="photo_inner">
                        <img src="../assets/image/P_05.jpg" >
                    </span>-->
        </div>

</template>
<script type="text/javascript">
export default{
   ready:function(){
          this.loader();
    },
   methods: {
     loader(){
          let tag=document.getElementById("phot");
          let lis=tag.getElementsByTagName("span");
          let timer;
          tag.scrollLeft=0;
          tag.innerHTML+=tag.innerHTML;
          let that=this
          timer=setInterval(function(){that.scroll(tag)},10);
          for(let i=0;i<lis.length;i++){
           lis[i].onmouseover=function(){
        	  clearInterval(timer);
          }
          lis[i].onmouseout=function(){
        	  timer=setInterval(function(){that.scroll(tag)},10)
          }
          }
          /*function scroll(){
          tag.scrollLeft++;
          if(tag.scrollLeft >= tag.scrollWidth/2){
              tag.scrollLeft =0;
              }
          }*/
    },
    scroll(ele){
      //let ele=document.getElementById(id)
      ele.scrollLeft++;
      if(ele.scrollLeft >= ele.scrollWidth/2){
          ele.scrollLeft =0;
          }
    },

},
}
</script>
<style>
/*#photo{overflow:hidden;width:212px;border: 5px solid #a4bad6;
        margin: 0 auto;border-radius: 10px;box-shadow: 5px 5px 5px #ccc;}*/
#phot{overflow:hidden;width:450px;height:300px;}
.photo_inner{ vertical-align:middle;display:table-cell;}
</style>
