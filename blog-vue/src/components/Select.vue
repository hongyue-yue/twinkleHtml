<template>

  <div id="select">
    <cite v-on:click="click($event)">请选择分类</cite>
    <ul>
       <li><a @click="funCl($event)" @mouseover="funMouseover($event)"  @mouseout="funMouseout($event)" selectid="1">ASP开发</a></li>
       <li><a @click="funCl($event)" @mouseover="funMouseover($event)"  @mouseout="funMouseout($event)" selectid="2">NET开发</a></li>
       <li><a @click="funCl($event)" @mouseover="funMouseover($event)"  @mouseout="funMouseout($event)" selectid="3">PHP开发</a></li>
       <li><a @click="funCl($event)" @mouseover="funMouseover($event)"  @mouseout="funMouseout($event)" selectid="4">Javascript开发</a></li>
       <li><a @click="funCl($event)" @mouseover="funMouseover($event)"  @mouseout="funMouseout($event)" selectid="5">Java特效</a></li>
    </ul>
  </div>

</template>

<script type="text/javascript">
export default {
  data () {
     return {
       index:-1,
       flag:0
     }
  },
  ready () {
      document.addEventListener('keyup', this.onkeyup)
      document.addEventListener('click', this.onclick)
  },
  methods: {
    click (event) {
            let box=document.getElementById('select')
            let menu=box.getElementsByTagName('ul')[0]
            let e= event || window.event
            if(e.stopPropagation){
            e.stopPropagation()
            }else{
             e.cancelBubble=true
           }
            menu.style.display="block"
    },
    funMouseover(e){
      let box=document.getElementById('select')
      let lis=box.getElementsByTagName('li')
      for(let i=0;i<lis.length;i++){
        lis[i].style.backgroundColor="#fff"
      }
       let li=e.target||e.path[0]
       li.style.backgroundColor="#bdbfb4";
    },
    funMouseout(e){
       let li=e.target||e.path[0]
       li.style.backgroundColor="#fff";
   },
    funCl (e) {
          let a=e.target||e.path[0]
          let b=a.innerHTML
          //console.log(b)
          let box=document.getElementById('select')
          let menu=box.getElementsByTagName('ul')[0]
          let title=box.getElementsByTagName('cite')[0]
          title.innerHTML=a.innerHTML;
          menu.style.display="none";
    },
    onclick () {
         //console.log("click")
         let box=document.getElementById('select')
         let menu=box.getElementsByTagName('ul')[0]
         menu.style.display="none";
    },
    onkeyup (event) {
         //console.log("keyup")
         var  box=document.getElementById('select')
         var menu=box.getElementsByTagName('ul')[0]
         var as=box.getElementsByTagName('a')
         var title=box.getElementsByTagName('cite')[0]
         var e=event||window.event
         if(e.keyCode==13){
           if(this.flag==0){
             menu.style.display="block"
             this.flag=1
           }else{
             title.innerHTML=as[this.index].innerHTML
             menu.style.display="none"
              //console.log(this.flag)
              this.flag=0
           }
         }
       if(e.keyCode==40){
          this.index=this.index+1
          //console.log(this.index)
          if(this.index>=as.length) this.index=0
          for(var i=0; i<as.length;i++){
                 as[i].style.backgroundColor = "#fff"
             }
              as[this.index].style.backgroundColor = "#bdbfb4"
          }
      if(e.keyCode==38){
          this.index=this.index-1
          if(this.index<0) this.index=as.length-1
          for(let i=0; i<as.length ; i++){
             as[i].style.backgroundColor ="#fff"
        }
          as[this.index].style.backgroundColor ="#bdbfb4"
      }

   },
  }
}
</script>
<style>
li{list-style:none;}
#select{width:186px;
        height:180px;
        }
#select ul,li{ margin:0; padding:0; font-size:13px;}
#select cite{
               width:150px;
                height:24px;
                line-height:24px;
                display:block;
                color:#807a62;
                cursor:pointer;
                font-style:normal;
                padding-left:4px;
                padding-right:30px;
                border:1px solid #333333;
                background:url(../assets/images7.png) no-repeat right ;
                background-size:10px 10px;
                }
#select ul{
              width:184px;
              border:1px solid #333333;
              background-color:#ffffff;
              position:absolute;
              margin-top:-1px;
              display:none;
              z-index:10;
            }
#select ul li{
              height:24px;
              line-height:24px;}
#select ul li a{
               display:block;
               height:24px;
               color:#333333;
               text-decoration:none;
               padding-left:10px;
               padding-right:10px;
                }
/*#select ul li:hover{background-color:#bdbfb4}*/
</style>
