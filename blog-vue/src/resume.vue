<template>

<div id="menu">
  <ul>
<!--运用锚点，实现导航定位。-->
  <li><a name="item2" v-on:click="clickScroll('item2')" class="current">基本资料</a></li>
  <li><a name="item3" v-on:click="clickScroll('item3')">期望工作</a></li>
  <li><a name="item4" v-on:click="clickScroll('item4')">教育经历</a></li>
  <li><a name="item5" v-on:click="clickScroll('item5')">技能标签</a></li>
  <li><a name="item6" v-on:click="clickScroll('item6')">自我评价</a></li>
  </ul>
</div>
<div id="content">
<div id="con">
  <div id="item1" >
      <img src="./assets/images6.jpg" width="100" height="100" />
      <h2>乐鸿跃</h2>
      <h3>WEB前端</h3>
      <p><img src="./assets/images4.png" width="20" height="18" />本科 ·  武汉理工大学华夏学院  ·  汽车服务工程</p>
      <p><img src="./assets/images3.jpg" width="18" height="16"/> 819937282@qq.com</p>
      <p>git: https://github.com/qinyueshang</p>
  </div>
  <div id="item2" class="item">
    <div class="title">
          <span class="theme">基本资料</span>
    </div>
    <div class="desc">
          <dl class="clearfix">
            <dt class="sub-title">姓&ensp;&ensp;&ensp;&ensp;名:</dt>
            <dd>乐鸿跃</dd>
          </dl>
          <dl class="clearfix">
            <dt class="sub-title">性&ensp;&ensp;&ensp;&ensp;别:</dt>
            <dd> 男 </dd>
          </dl>
          <dl class="clearfix">
            <dt class="sub-title">出生日期:</dt>
            <dd>1991.11</dd>
          </dl>
          <dl class="clearfix">
              <dt class="sub-title">现&ensp;居&ensp;地:</dt>
              <dd>上海</dd>
          </dl>

    </div>
  </div>
  <div id="item3" class="item">
    <div class="title">
        <span class="theme">期望工作</span>
    </div>
    <div class="desc">
        <dl class="clearfix">
            <dt class="sub-title">期望工作:</dt>
            <dd>web前端 互联网</dd>
        </dl>
        <dl class="clearfix">
            <dt class="sub-title">期望城市:</dt>
            <dd>不限</dd>
        </dl>
        <dl class="clearfix">
            <dt class="sub-title">期望薪资:</dt>
            <dd>7K+</dd>
        </dl>
        <dl class="clearfix">
            <dt class="sub-title">当前状态:</dt>
            <dd>正在找工作</dd>
        </dl>
    </div>
  </div>
  <div id="item4" class="item">
      <div class="title">
          <span class="theme">教育经历</span>
      </div>
      <div class="img">
        <span>武汉理工大学华夏学院 · 2011.09-2015.06</span><br/>
        <span>本科 · 汽车服务工程</span>
      </div>
 </div>
 <div id="item5" class="item">
     <div class="title">
         <span class="theme">技能标签</span>
     </div>
     <ul>
       <li>html+css：可以一个人完成网站PC端、wap端页面的制作</li>
       <li>javascript：熟悉js、jquery，能完成页面交互效果的制作</li>
       <li>vue.js：练习使用vue脚手架工具vue-cli及vue-router. vuex构建twinkle主要界面,以及制作个人网页</li>
     </ul>
 </div>
 <div id="item6" class="item">
     <div class="title">
         <span class="theme">自我评价</span>
     </div>
     <ul>
       <li>靠谱青年,执行力强</li>
       <li>本人是一个比较随和的人，注重团队，对工作热情、积极主动</li>
       <li>本人热爱学习,接受能力强,责任心强,工作态度认真</li>

     </ul>
 </div>
</div>

</div>

</template>
<script>
export default{
  ready () {
       document.addEventListener('scroll', this.onScroll)
},
  methods: {
       clickScroll (id) {
           let item=document.getElementById(id)
           //console.log(item)
           item.scrollIntoView()
       },
       hasClass ( obj, cls ) {
	        return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
	     },
       removeClass ( obj, cls ) {
	        if(this.hasClass( obj, cls )){
			    let reg = new RegExp("(\\s|^)" + cls + "(\\s|$)")
			    obj.className = obj.className.replace(reg, "")
		      }
	    },
      addClass (obj, cls) {
          if(!this.hasClass(obj, cls)){
            obj.className += " " + cls
          }
      },
      onScroll () {
		      let top = document.documentElement.scrollTop || document.body.scrollTop
			    let menus = document.getElementById("menu").getElementsByTagName("a")
          let items = document.getElementsByClassName("item")
          let currentId = ""
          if(top<350){
            menus[0].className="current"
          }else{
            for ( let i=0; i< items.length; i++ ){
  			       let _item = items[i]
  			       let _itemTop = _item.offsetTop
  				     if( top > _itemTop - 100 ){
  				        currentId = _item.id
  			    	} else {
  				      break;
  			  	  }
  			    }
            if(currentId){
               for(let j = 0; j < menus.length; j++){
                let _menu = menus[j]
                let _name = _menu.name
                if(_name!= currentId){
                   this.removeClass(_menu, "current")
                } else {
                   this.addClass(_menu, "current")
                }
                }
             }
          }

		},
  },
}
</script>
<style>

#content {width:800px;background-color:rgba(240, 243, 246, 0.3);margin-top:20px;padding:20px 0 20px 0;}
#con{width:600px;margin:0 auto;}
#con .item .title{font-size:24px;text-align:center;border-bottom:medium double #d5d7dd;}
#con .item .title .theme{display:inline-block;
                  width:120px;
                  height:30px;
                  line-height:30px;
                  border-radius:10px;
                  font-weight: bold;
                  position:relative;
                  top:15px;
                  z-index:3;
                  background-color:#cdd0d4;
                  }

#item1>img{display:block;margin:0 auto;}
#item1 h2{text-align:center;height:35px;line-height:35px;}
#item1 h3{text-align:center;height:30px;line-height:30px;}
#item1 p{font-size:16px;text-align:center;height:26px;line-height:22px;font-weight:bold;}
#item1 p img{position:relative;top:2px;}
#item4 .img{background:url(./assets/images5.png);
           background-repeat:no-repeat;
           background-position:left;
           background-size:60px 60px;
           height:100px;margin-top:25px;
           margin-left:25px;
          }
#item4 .img span{
                 height:25px;
                 line-height:25px;
                 font-size:16px;
                 position: relative;
                 left:70px;top:25px;
               }

#item6 ul,#item5 ul{margin:20px 0 0 15px;}
#item6 ul li,#item5 ul li{list-style-type: disc;height:28px;line-height:28px;font-size:15px;}

#con .item .desc{margin-top:30px;height:100px;}
#con .item .desc .clearfix{width:280px;
                     font-size:18px;
                     height:40px;
                    line-height:40px;
                    float:left;
               }
#con .item .desc .clearfix .sub-title{font-weight:bold;float:left;margin:0 10px 0 20px;}
#con .item {

         height:180px;
         margin-top:20px;
        }

#menu {
        position: fixed;
        top: 100px;
        left:930px;
        width: 80px;
      }
#menu li {list-style-type: none;}
#menu ul li a {
        display: block;
        margin: 5px 0;
        font-size: 14px;
        font-weight: bold;
        color: #333;
        width: 80px;
        height: 50px;
        line-height: 50px;
        text-decoration: none;
        text-align: center;
        }
#menu ul li a:hover,
#menu ul li a.current {
        color: #7dd4ce;
        }
