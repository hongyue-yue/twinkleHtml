<style type="text/css">
.near{position:relative;width:20rem;height:31.5rem;display:block;}
#canvas{margin:0;position:absolute;top:0;left:0;bottom:0;z-index:3;}
#canvasTwo{margin:0;position:absolute;top:0;left:0;z-index:0;}
#canvasThree{margin:0;position:absolute;top:0;left:0;z-index:1;}
#canvasFour{margin:0;position:absolute;top:14.2rem;left:9rem;z-index:2;width:3.33rem;height:3.33rem}
#canvasFive{margin:0;position:absolute;top:0;left:0;z-index:4;}
.friendList{position:absolute;top:0.28rem;right:0.28rem;z-index:5;width:3.95rem;height:3.89rem;}
.friendList img{display:block;margin:0 auto;width:2.78rem;height:2.78rem}
.friendList span{color:rgb(76, 214, 206);font-size:0.58rem;display:block;width:3.89rem;text-align:center;}
</style>

<template >
  <div class="near">
    <canvas id="canvas"></canvas>
    <canvas id="canvasTwo" ></canvas>
    <canvas id="canvasThree" ></canvas>
    <canvas id="canvasFour" ></canvas>
    <canvas id="canvasFive" ></canvas>
      <div class="friendList">
      <img src="../assets/people.png"/>
      <span>好友列表</span>
    </div>
  </div>
</template>

<script>
export default {
  vuex:{
    getters:{
      friendList:state=>state.friendList,
      user:state=>state.user,
    },
  },
  ready() {
    this.load()
  },
  methods: {
      load(){
            let fontSize=document.getElementsByTagName('html')[0].style.fontSize
            let size=parseInt(fontSize)
            let w=20*size
            let h=31.5*size
            let canvas=document.getElementById('canvas')
            let canvasTwo=document.getElementById('canvasTwo')
            let canvasThree=document.getElementById('canvasThree')
            let canvasFive=document.getElementById('canvasFive')
            canvas.setAttribute('width',w+"px")
            canvas.setAttribute('height',h+"px")
            canvasTwo.setAttribute('width',w+"px")
            canvasTwo.setAttribute('height',h+"px")
            canvasThree.setAttribute('width',w+"px")
            canvasThree.setAttribute('height',h+"px")
            canvasFive.setAttribute('width',w+"px")
            canvasFive.setAttribute('height',h+"px")
            let that=this
            that.drawFive(size)
            that.drawTwo(size)
            that.drawFour()
             window.requestAnimationFrame(function(){
                that.draw()
               that.drawThree()
              });

      },
      init(){
              let time=new Date()
              let a
              a=(Math.sin(((2*Math.PI)/10)*time.getSeconds()+((2*Math.PI)/10000)*time.getMilliseconds() )+1.5)/10
              return a
      },
      ballArc(x, y, radius,color,id){
              let ctx=document.getElementById(id).getContext('2d')
              ctx.beginPath()
              ctx.arc(x, y, radius, 0, Math.PI*2, false)
              ctx.closePath()
              ctx.fillStyle = color
              ctx.fill()
         },
      drawFive(size){
              let ctxFive = document.getElementById("canvasFive").getContext("2d")
              ctxFive.translate(10*size,15.556*size)
              if(this.friendList.length){
                for(let i=0;i<this.friendList.length;i++){
                    let image = new Image()
                    image.src =this.friendList[i].imgSrc
                    let m=this.friendList[i].widthValue
                    let n=this.friendList[i].heightValue
                    image.onload = function(){
                    ctxFive.drawImage(image,20*m,20*n,1.667*size,1.667*size)
                  }
                }
              }

      },
      drawFour(){
              let canvas = document.getElementById("canvasFour").getContext("2d")
              let image = new Image()
              image.src =this.user.usersImg
              image.onload = function(){
                canvas.drawImage(image,10,10,155,100)
              }
              /*canvas.beginPath()
              canvas.arc(60,60,100,0,Math.PI*2,true)
              canvas.clip()*/
      },
       drawThree(){
              let fontSize=document.getElementsByTagName('html')[0].style.fontSize
              let size=parseInt(fontSize)
              let ctxThree=document.getElementById('canvasThree').getContext('2d')
              let timer=new Date()
              //console.log(size)
              ctxThree.clearRect(0,0,15.556*size,31.5*size)
              ctxThree.save()
              ctxThree.rotate( ((2*Math.PI)/20)*timer.getSeconds() + ((2*Math.PI)/20000)*timer.getMilliseconds())
              this.ballArc(9.17*size,7.5*size,10,'rgba(215, 104, 242,0.5)','canvasThree')
              this.ballArc(8.333*size,8.333*size,8,'rgba(176, 65, 108,0.3)','canvasThree')
              this.ballArc(8.0278*size,8.611*size,6,'rgba(61, 215, 47,0.7)','canvasThree')
              this.ballArc(5.556*size,12.778*size,7,'rgba(16, 179, 203,0.6)','canvasThree')
              this.ballArc(11.111*size,8.333*size,3,'rgba(2, 55, 157,0.5)','canvasThree')
              this.ballArc(7.5*size,7.222*size,28,'rgba(97, 89, 23, 0.65)','canvasThree')
              this.ballArc(7.694*size,7.333*size,6,'rgba(130, 210, 123,0.4)','canvasThree')
              this.ballArc(7.222*size,10.139*size,8,'rgba(182, 106, 106,0.8)','canvasThree')
              this.ballArc(7.5*size,7.056*size,3,'rgba(146, 101, 181,0.5)','canvasThree')
              ctxThree.beginPath()
              ctxThree.arc(7.5*size,7.222*size,40,0,Math.PI*2,false)
              ctxThree.arc(7.5*size,7.222*size,30,0,Math.PI*2,false)
              ctxThree.fillStyle = 'rgba(43, 195, 117, 0.26)'
              ctxThree.fill("evenodd")
              ctxThree.restore()
              let that=this
              window.requestAnimationFrame(function(){that.drawThree()})
       },
       drawTwo(size){
             //let fontSize=document.getElementsByTagName('html')[0].style.fontSize
             //let size=parseInt(fontSize)
             //console.log(size)
             let ctxTwo = document.getElementById('canvasTwo').getContext('2d')
             let background = ctxTwo.createLinearGradient(0,0,0,31.5*size)
             background.addColorStop(0, 'rgb(61, 40, 64)')
             background.addColorStop(0.7, 'rgb(144, 140, 144)')
             background.addColorStop(1, 'rgb(242, 239, 162)')
             ctxTwo.fillStyle = background
             ctxTwo.fillRect(0,0,20*size,31.5*size)
       },
       draw(){
              let earth=new Image()
              let moon=new Image()
              moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
              earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
              let fontSize=document.getElementsByTagName('html')[0].style.fontSize
              let size=parseInt(fontSize)

              let ctx= document.getElementById('canvas').getContext('2d')
              let time=new Date()
              ctx.globalCompositeOperation = 'destination-over'
              ctx.clearRect(0,0,20*size,31.5*size)


              ctx.save()
              ctx.translate(10*size,15.556*size)
              ctx.save()
              ctx.fillStyle = '#FFF'
              ctx.globalAlpha =this.init()
              for (var i=3;i<6;i++){
              ctx.beginPath()
              ctx.arc(0,0,40+15*i,0,Math.PI*2,true)
              ctx.fill()
              }
              ctx.restore()


              ctx.save()
              ctx.rotate( ((2*Math.PI)/20)*time.getSeconds() + ((2*Math.PI)/20000)*time.getMilliseconds() )
              ctx.translate(6.9444*size,0);
              ctx.beginPath();
              ctx.arc(-10,20,36,0,Math.PI*2,false)
              ctx.arc(-10,20,30,0,Math.PI*2,false)
              ctx.fillStyle = 'rgba(236, 237, 240, 0.12)'
              ctx.fill("evenodd")
              this.ballArc(-10,20,28,'rgba(20, 24, 116, 0.61)','canvas')
              this.ballArc(-12,18,4,'rgb(27, 140, 32)','canvas')
              ctx.restore()

              ctx.save()
              ctx.rotate( ((2*Math.PI)/10)*time.getSeconds() + ((2*Math.PI)/10000)*time.getMilliseconds() )
              this.ballArc(100,0,5,'rgb(215, 104, 242)','canvas')
              this.ballArc(120,-20,5,'rgb(94, 68, 236)','canvas')
              this.ballArc(135,-40,5,'rgb(118, 224, 96)','canvas')
              this.ballArc(145,-60,5,'rgb(123, 220, 236)','canvas')
              this.ballArc(150,-80,5,'rgb(231, 196, 90)','canvas')

              this.ballArc(0,100,5,'rgb(215, 104, 242)','canvas')
              this.ballArc(20,120,5,'rgb(94, 68, 236)','canvas')
              this.ballArc(40,135,5,'rgb(118, 224, 96)','canvas')
              this.ballArc(60,145,5,'rgb(123, 220, 236)','canvas')
              this.ballArc(80,150,5,'rgb(231, 196, 90)','canvas')

              this.ballArc(0,-100,5,'rgb(215, 104, 242)','canvas')
              this.ballArc(-20,-120,5,'rgb(94, 68, 236)','canvas')
              this.ballArc(-40,-135,5,'rgb(118, 224, 96)','canvas')
              this.ballArc(-60,-145,5,'rgb(123, 220, 236)','canvas')
              this.ballArc(-80,-150,5,'rgb(231, 196, 90)','canvas')

              this.ballArc(-100,0,5,'rgb(215, 104, 242)','canvas')
              this.ballArc(-120,20,5,'rgb(94, 68, 236)','canvas')
              this.ballArc(-135,40,5,'rgb(118, 224, 96)','canvas')
              this.ballArc(-145,60,5,'rgb(123, 220, 236)','canvas')
              this.ballArc(-150,80,5,'rgb(231, 196, 90)','canvas')
              ctx.restore()

              ctx.save()
              ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() )
              ctx.translate(8.333*size,0)
              ctx.globalAlpha=0.4
              this.ballArc(-12,-12,30,'rgb(231, 196, 90)','canvas')
              //ctx.drawImage(earth,-12,-12)

              ctx.save()
              ctx.rotate(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() )
              ctx.translate(1.667*size,0)
              this.ballArc(-4,-4,8,'rgb(237, 235, 229)','canvas')
              //ctx.drawImage(moon,-4,-4)
              ctx.restore()
              ctx.restore()

              ctx.restore()


              ctx.beginPath()
              ctx.moveTo(0,26.111*size)
              ctx.quadraticCurveTo(2.778*size,25*size,4.444*size,26.944*size)
              ctx.quadraticCurveTo(8.333*size,25.556*size,11.111*size,27.778*size)
              ctx.quadraticCurveTo(12.5*size,27.5*size,13.33*size,28.611*size)
              ctx.quadraticCurveTo(15*size,26.389*size,17.222*size,27.222*size)
              ctx.quadraticCurveTo(18.333*size,25.556*size,20*size,26.111*size)
              ctx.quadraticCurveTo(20*size,16.667*size,20*size,31.389*size)
              ctx.quadraticCurveTo(6.944*size,31.389*size,0,31.389*size)
              ctx.quadraticCurveTo(0,30.556*size,0,26.111*size)
              ctx.fillStyle='rgba(159, 182, 103, 0.5)'
              ctx.fill()
              ctx.beginPath()
              ctx.moveTo(0,27.778*size)
              ctx.quadraticCurveTo(2.778*size,26.667*size,4.444*size,28.944*size)
              ctx.quadraticCurveTo(8.333*size,27.222*size,11.111*size,29.778*size)
              ctx.quadraticCurveTo(12.5*size,29.167*size,13.33*size,30.277*size)
              ctx.quadraticCurveTo(15*size,28.056*size,17.222*size,28.889*size)
              ctx.quadraticCurveTo(18.333*size,27.222*size,20*size,27.778*size)
              ctx.quadraticCurveTo(20*size,16.667*size,20*size,31.389*size)
              ctx.quadraticCurveTo(6.944*size,31.389*size,0,31.389*size)
              ctx.quadraticCurveTo(0,30.556*size,0,30.556*size)
              ctx.fillStyle='rgba(122, 150, 53, 0.3)'
              ctx.fill()

              let that=this
              window.requestAnimationFrame(function(){that.draw()})
            },
  },

};
</script>
