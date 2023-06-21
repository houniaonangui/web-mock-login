<template>
  <div>
    <!--右侧导航栏开始-->
    <div class="sidebar x-show">
      <div>
        <div class="sb-item sb-wx">
          <router-link to="/Study">
            <div class="box">
              <div class="ico"><img src="../assets/sta.png" alt=""></div>
              <div class="txt middle">
                <div class="middle-cont">
                  攻略<br />
                  分享
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- Other sidebar items -->
        
        <div class="sb-item sb-wx">
          <router-link to="/Sport">
            <div class="box">
              <div class="ico"><img src="../assets/sport.png" alt=""></div>
              <div class="txt middle">
                <div class="middle-cont">
                  运动<br />
                  召集
                </div>
              </div>
            </div>
          </router-link>
        </div>
       
        <div class="sb-item sb-wx">
          <router-link to="/Talk">
            <div class="box">
              <div class="ico"><img src="../assets/speak.png" alt=""></div>
              <div class="txt middle">
                <div class="middle-cont">
                  吐槽<br />
                  大会
                </div>
              </div>
            </div>
          </router-link>
        </div>
        
        <div class="sb-item sb-wx">
          <router-link to="/Lost">
            <div class="box">
              <div class="ico"><img src="../assets/lost.png" alt=""></div>
              <div class="txt middle">
                <div class="middle-cont">
                  失物<br />
                  招领
                </div>
              </div>
            </div>
          </router-link>
        </div>
        
        <div class="sb-item sb-wx">
          <router-link to="/Recommend">
            <div class="box">
              <div class="ico"><img src="../assets/re.png" alt=""></div>
              <div class="txt middle">
                <div class="middle-cont">
                  好物<br />
                  推荐
                </div>
              </div>
            </div>
          </router-link>
        </div>
        
        <div class="sb-item sb-wx">
          <router-link to="/Pet">
            <div class="box">
              <div class="ico"><img src="../assets/pet.png" alt=""></div>
              <div class="txt middle">
                <div class="middle-cont">
                  川师<br />
                  校宠
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="sb-item js-gotop topping sb-wx">
          <a href="javascript:;" @click="goToTop">
            <div class="box">
              <div class="ico"><img src="../assets/top.png" alt=""></div>
              <div class="txt middle">
                <div class="middle-cont">
                  <br />
                  回到<br />
                  顶部
                </div>
              </div>
            </div>
          </a>
        </div>
        <!-- ... -->
      </div>
    </div>
    <!-- 右侧导航栏结束 -->

    <!-- 顶部导航栏开始 -->
    <div class="shell-main-nav">
      <div class="logo">
        <!-- LOGO -->
        <img src="../assets/02.jpg" alt="">
        <span>生活需要分享</span>
        <!-- 文字标题 -->
      </div>
      <!-- 导航栏 -->
      <ul>
        <li><router-link to="/Study">攻略分享</router-link></li>
        <li><router-link to="/Sport">运动召集</router-link></li>
        <li><router-link to="/Talk">吐槽大会</router-link></li>
        <li><router-link to="/Lost">失物招领</router-link></li>
        <li><router-link to="/Recommend">好物推荐</router-link></li>
        <li><router-link to="/Pet">川师校宠</router-link></li>
        <li><router-link to="/Login">登录</router-link></li>
        <div class="nav-box"></div>
      </ul>
    </div>
    <!-- 顶部导航栏结束 -->

    <!-- 首页开始 -->
    <!-- 轮播图开始 -->
    <div id="top">
      <!-- 上方轮播图 -->
      <div class="left">
        <!-- 轮播图内容 -->
        <ui class="images">
        <li class="img">
          <img src="../assets/01.png" alt="攻略大全">
        </li>
        <li class="img">
          <img src="../assets/02.png" alt="运动召集">
        </li>
        <li class="img">
          <img src="../assets/03.png" alt="吐槽大会">
        </li>
        <li class="img">
          <img src="../assets/04.png" alt="失物招领">
        </li>
        <li class="img">
          <img src="../assets/05.png" alt="好物推荐">
        </li>
        <li class="img">
          <img src="../assets/pet.png" alt="川师校宠">
        </li>
      </ui>
      <ui class="min">
        <li class="m"></li>
        <li class="m"></li>
        <li class="m"></li>
        <li class="m"></li>
        <li class="m"></li>
        <li class="m"></li>
      </ui>   
      <div class="button">
        <div class="button-left" @click="prevSlide">&lt;</div>
        <div class="button-right" @click="nextSlide">&gt;</div>
      </div>
      </div>
      <!-- 团队介绍开始 -->
      <div class="shell-main-content">
        <div class="shell-main-content-left">
          <h2>团队<br />介绍</h2>
          <div class="shell-main-content-left-fans">
            <!-- 团队介绍内容 -->
            <ul>
                  <li><img src="../assets/01.png" alt=""></li>
                  <li><img src="../assets/02.png" alt=""></li>
                  <li><img src="../assets/03.png" alt=""></li>
                  <li><img src="../assets/04.png" alt=""></li>
                  <li><img src="../assets/pet.png" alt=""></li>
                  <li><span>•••
                      </span></li>
              </ul>

          </div>
        </div>
      </div>
    </div>
    <!-- 轮播图结束 -->
    <!-- 六大板块 -->
    <div class="nav05_centent">
      <!-- 板块内容 -->
      <div class="nav05_centent_tit">
      <h1>🦄六大板块🦄</h1>
      <p>在这里你可以畅所欲言</p>
      </div>
      <!-- 攻略分享 -->
    <div class="nav05_centent_mb">
      <a href="" target="_blank" rel="noopener noreferrer">
        <div><img src="../assets/01.png" alt="[]"></div>
        <h3>攻略分享</h3>
        <p>努力升级打怪中...</p>
      </a>
      <div>立即前往</div>
    </div>
      <!-- 运动召集 -->
    <div class="nav05_centent_mb">
      <a href="" target="_blank" rel="noopener noreferrer">
        <div><img src="../assets/01.png" alt="[]"></div>
        <h3>运动召集</h3>
        <p>戒掉咖啡戒油腻🎵</p>
      </a>
      <div>立即前往</div>
    </div>
      <!-- 吐槽大会 -->
    <div class="nav05_centent_mb">
      <a href="" target="_blank" rel="noopener noreferrer">
        <div><img src="../assets/01.png" alt="[]"></div>
        <h3>吐槽大会</h3>
        <p>今天这话我必须要说！</p>
      </a>
      <div>立即前往</div>
    </div>
    <!-- 失物招领 -->
    <div class="nav05_centent_mb">
      <a href="" target="_blank" rel="noopener noreferrer">
        <div><img src="../assets/01.png" alt="[]"></div>
        <h3>失物招领</h3>
        <p>等一下，你有东西落下了~</p>
      </a>
      <div>立即前往</div>
    </div>
    <!-- 好物推荐 -->
    <div class="nav05_centent_mb">
      <a href="" target="_blank" rel="noopener noreferrer">
        <div><img src="../assets/01.png" alt="[]"></div>
        <h3>好物推荐</h3>
        <p>爱生活，爱分享</p>
      </a>
      <div>立即前往</div>
    </div>
    <!-- 川师校宠 -->
    <div class="nav05_centent_mb">
      <a href="" target="_blank" rel="noopener noreferrer">
        <div><img src="../assets/01.png" alt="[]"></div>
        <h3>川师校宠</h3>
        <p>小猫咪生下来就是要被妈妈亲亲的~</p>
      </a>
      <div>立即前往</div>
    </div>

    </div>
    <!-- 相关链接开始 -->
  <div class="contract_us">
    <div class="contract_word">相关链接</div>
    <div class="contract">
        <div class="contract_link"><a href="http://www.sicnu.edu.cn/" target="_blank">校园官网</a></div>
        <div class="contract_link"><a href="http://jwc.sicnu.edu.cn/" target="_blank">教务信息</a></div>
        <div class="contract_link"><a href="newstudent.html" target="_blank">新生交流</a></div>
        <div class="contract_link"><a href="https://lib.sicnu.edu.cn/" target="_blank">图书馆</a></div>
    </div>
</div>
  <!-- 相关链接结束 -->

  </div>
</template>

<script>

export default {
  components:{
    
  },
  data() {
    return {
      images: [
        { src: '../assets/01.png', alt: '攻略大全' },
        { src: '../assets/02.png', alt: '运动召集' },
        { src: '../assets/03.png', alt: '吐槽大会' },
        { src: '../assets/04.png', alt: '失物招领' },
        { src: '../assets/05.png', alt: '好物推荐' },
        { src: '../assets/pet.png', alt: '川师校宠' }
      ],
      m: [],
      index: 0,
      time: null
    };
  },
  mounted() {
    this.initializeM();
    this.timer();
  },
  methods: {
    initializeM() {
      this.m = Array.from({ length: this.images.length });
    },
    position() {
      const images = this.$el.querySelector('.images');
      images.style.left = `${this.index * -100}%`;
    },
    add() {
      if (this.index >= this.m.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    desc() {
      if (this.index < 1) {
        this.index = this.m.length - 1;
      } else {
        this.index--;
      }
    },
    prevSlide() {
      this.desc();
      this.position();
      this.clearTimer();
      this.timer();
    },
    nextSlide() {
      this.add();
      this.position();
      this.clearTimer();
      this.timer();
    },
    goToSlide(index) {
      this.index = index;
      this.position();
      this.clearTimer();
      this.timer();
    },
    timer() {
      this.time = setInterval(() => {
        this.index++;
        this.desc();
        this.add();
        this.position();
      }, 3000);
    },
    clearTimer() {
      clearInterval(this.time);
    }
  },
  beforeDestroy() {
    this.clearTimer();
  }
};
</script>

<style lang="scss" scoped>

body {
    /* 背景渐变 */
    background-image: linear-gradient(to bottom right,
            #91defe,
            #99c0f9,
            #bdb6ec,
            #d7b3e3,
            #efb3d5,
            #f9bccc);
}


/* 一键回顶部开始 */

.gotop {
    cursor: pointer;
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 99999;
    display: block;
    width: 50px;
    height: 50px;
    background: url(../assets/logo.png) no-repeat 0 0;
    opacity: 0.5;
    filter: alpha(opacity=50);
    /*动画效果*/
    outline: none;
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
}

.gotop:hover {
    background: url(../assets/logo.png) no-repeat 0 -52px;
}


/* 一键回顶部结束 */


/**顶部导航开始***/

/********************************************右侧导航*******************/
.middle-cont {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    letter-spacing: 0;
}

.sidebar {
    position: fixed;
    right: -55px;
    top: 30%;
    z-index: 2;
    font-family: "微软雅黑";
    display: none;
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
}

.sidebar .sb-item {
    position: relative;
    width: 70px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 0px 0px 24px 0px rgba(4, 1, 1, 0.32);
    cursor: pointer;
}

.sidebar .sb-item+.sb-item {
    margin-top: 5px;
}

.sidebar .box {
    position: relative;
    right: 0;
    width: 140px;
    -webkit-transition: right .5s;
    -ms-transition: right .5s;
    transition: right .5s;
}


/**************表面图***********/
.sidebar .ico {
    padding: 15px;
    width: 40px;
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    -webkit-box-sizing: content-box;
    -ms-box-sizing: content-box;
    box-sizing: content-box;
}

.sidebar .ico img {
    display: block;
    width: 100%;
}

.sidebar .txt {
    width: 70px;
    height: 70px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #9a2929;
    color: #fff;
    line-height: 20px;
    text-align: center;
    display: none;
}

.sidebar .sb-wx:hover .ico {
    display: none;
}

.sidebar .sb-wx:hover .txt {
    display: block;
}

.sidebar .sb-wx:hover .pop {
    display: block;
}

.sidebar.x-show {
    display: block;
}

.sidebar:hover {
    right: 0;
}


/********************************************右侧结束*********************/
/********************************************上方开始***********************/
body .shell-main-nav ul {
    /* transform: scale(1); */
    right: 350px;
    top: 2px;
}

body .shell-main-nav ul {
    width: 805px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 5%;
}

body .shell-main-nav ul .nav-box {
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 85px;
    height: 5px;
    border-radius: 2px;
    z-index: -999;
    transition: .5s;
}

body .shell-main-nav ul li {
    width: 200px;
    text-align: center;
}

body .shell-main-nav ul li a {
    color: #000;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 70px;
    text-align: center;
}

body .shell-main-nav ul li:nth-child(1):hover~.nav-box {
    left: 15px;
    background-color: rgb(203, 69, 240);
}

body .shell-main-nav ul li:nth-child(2):hover~.nav-box {
    left: 135px;
    background-color: red;
}

body .shell-main-nav ul li:nth-child(3):hover~.nav-box {
    left: 245px;
    background-color: #8da1f8;
}

body .shell-main-nav ul li:nth-child(4):hover~.nav-box {
    left: 360px;
    background-color: #ffb1b1;
}

body .shell-main-nav ul li:nth-child(5):hover~.nav-box {
    left: 475px;
    background-color: #7df88e;
}

body .shell-main-nav ul li:nth-child(6):hover~.nav-box {
    left: 590px;
    background-color: #40b1d4;
}

body .shell-main-nav ul li:nth-child(7):hover~.nav-box {
    left: 700px;
    background-color: #d4c840;
}


body .shell-main-nav .logo {
    display: none;
}

body .shell-main-nav {
    width: 100%;
    height: 45px;
    position: sticky;
    z-index: 999;
    top: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 10vh;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.6));
    backdrop-filter: blur(13px);
}

body .shell-main-nav .logo {
    width: 220px;
    height: 100%;
    position: absolute;
    left: 5%;
    justify-content: space-between;
    display: flex;
    align-items: center;
}

body .shell-main-nav .logo img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
}

body .shell-main-nav .logo span {
    font: 100 22px 'font';
    letter-spacing: 2px;
}

/********************************************上方结束***********************/
/**顶部导航结束**/

#top{
    width: 1400px;
    /* margin: 30px auto; */
}

/********************************************上轮播图**********************/
.left {
    width: 600px;
    height: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    margin-left: 50px;
    /* margin-right: 10px; */
    box-shadow: 20px 30px 20px rgba(0, 0, 0, 0.25);
}

.images {
    width: 500%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    transition: .2s;
}

.img {
    width: 100%;
    background-size: cover;
}

.min {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 40px;
    width: 30%;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
}

.m {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    border: solid rgba(255, 255, 255, 0.5) 5px;
    background-color: #fff;
}

.button {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    user-select: none;
}

.button-left,
.button-right {
    font-size: 50px;
    background-color: rgba(160, 193, 255, 0.2);
    padding: 0 20px;
    cursor: pointer;
    line-height: 700px;
    color: #fff;
}

/********************************************上轮播图结束*******************/

body .shell-main-content {
    position: relative;
    display: flex;
    width: 600px;
    height: 400px;
    float: right;
    overflow: hidden;
    top: -400px;
    right: 60px;
    border-radius: 15px;
    box-shadow: 20px 30px 20px rgba(0, 0, 0, 0.25);
  }
  
  body .shell-main-content-left {
    width: 60%;
    height: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;
  }
  
  
  body .shell-main-content-left h2 {
    font-size: 40px;
    color: #fff;
    letter-spacing: 10px;
  }
  
  body .shell-main-content-left-fans {
    width: 300px;
    height: 300px;
    transform: scale(0.7);
  }
  
  body .shell-main-content-left-fans ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  body .shell-main-content-left-fans ul li {
    width: 80px;
    height: 80px;
    background-color: #000;
    border-radius: 50%;
    overflow: hidden;
  }
  
  body .shell-main-content-left-fans ul li:hover img {
    transform: scale(1.2);
  }
  
  body .shell-main-content-left-fans ul li img {
    width: 100%;
    transition: .2s;
  }
  
  body .shell-main-content-left-fans ul li span {
    color: #fff;
    font-size: 40px;
    text-align: center;
    display: block;
    line-height: 80px;
  }
  
  


/************六个页面的轮播图*****************/

.nav05_centent{
	width: 100%;
	height: auto;
	overflow: hidden;
	text-align: center;
}
.nav05_centent_tit{
	text-align: center;
}
.nav05_centent_tit h1{
	font-size: 32px;
}
.nav05_centent_tit p{
	color: rgba(68, 63, 63, 0.5);
	font-size: 15px;
}
.nav05_centent_mb{
	width: 25%;
	height: 230px;
    left: 80px;
	margin: 20px 1%;
	float: left;
	position: relative;
}
.nav05_centent_mb a{
	width: 100%;
	height: 100%;
	border-radius: 8px;
	text-align: left;
	background-color: #FFFFFF;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 5;
}
.nav05_centent_mb>a>div{
	width: 100%;
	height: 140px;
	border-radius: 8px;
	text-align: center;
	overflow: hidden;
	background: #333;
}
.nav05_centent_mb>a>div img{
	text-align: center;
	height: 100%;
    transform: scale(1.6);
}
.nav05_centent_mb>a>h3{
	margin-left: 8%;
	margin-top: 22px;
	color: #606060;
	font: 18px cnm,Arial,sans-serif;
	text-shadow: 5px 5px 5px #909090;
	font-weight: 700;
	letter-spacing: 1px;
}
.nav05_centent_mb>a>p{
	margin-left: 8%;
	margin-top: 5px;
	color: #a1a1a1;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 2px;
}
.nav05_centent_mb>div{
	width: 100%;
	height: 100%;
	border-radius: 8px;
	background-color: #cfbc9a;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	transition: 0.5s;
	color:#F9f9f9;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 2px;
	text-align: center;
	line-height: 20px;
}
.nav05_centent_mb:hover>div{
	transform: translateY(-20px);
}



/*************************6个页面轮播结束********************/
.clearfix{
    *zoom:1;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;

    height: 0;
    visibility: hidden;
}




/* 相关链接开始 */

.contract_us {
    width: 100%;
	height: 200px;
	margin: 160px 0px 40px 0px;
}

.contract_word {
    width: 100%;
    height: 50px;
    color: white;
    line-height: 50px;
    font-size: 20px;
    text-align: center;

}

.contract_link {
    width: 35%;
    height: 50px;
    /* border: 2px yellow solid; */
    float: left;
    margin-left: 10%;
    text-align: center;
    line-height: 50px;
}

.contract_link a {
    text-decoration: none;
    color: white;
}

.code_word {
    width: 100%;
    height: 100px;
    margin-top: 50px;
    padding-left: 40%;
    line-height: 100px;
    font-size: 20px;

}

* {
    padding: 0;
    margin: 0;
    list-style: none;
    outline: none;
    text-decoration: none;
  }

/* 相关链接结束 */

</style>
