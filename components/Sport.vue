<template>
  <div class="container">
    <div class="nav">
      <div class="header">
        <h1>运动小圈</h1>
      </div>
      <a href="#qingchun">青春校园</a>
      <a href="#yue">约</a>
      <a href="#relevant">相关赛事</a>
    </div>

    <div class="qingchun" id="qingchun">
      <span>青春校园</span>
    </div>
    <section id="slideshow">
      <img src="../assets/sport-qingchun1.jpg" alt="">
      <img src="../assets/sport-qingchun2.jpg" alt="">
      <img src="../assets/sport-qingchun3.jpg" alt="">
      <img src="../assets/sport-qingchun4.jpg" alt="">
      <img src="../assets/sport-qingchun5.jpg" alt="">
      <img src="../assets/sport-qingchun6.jpg" alt="">
      <img src="../assets/sport-qingchun7.jpg" alt="">
      <img src="../assets/sport-qingchun8.jpg" alt="">
      <img src="../assets/sport-qingchun9.jpg" alt="">
      <img src="../assets/sport-qingchun10.jpg" alt="">
    </section>

    <div class="yue" id="yue">
      <span>约</span>
    </div>
    <section class="section">
      <div class="box">
        <img src="../assets/sport-yue-run.webp" alt="">
        <h3>跑步</h3>
        <p>跑步是一项非常健康的运动，可以锻炼身体，提高免疫力。<br>想相约跑步的同学可以加入QQ群聊：728709823哦！</p>
      </div>
      <div class="box">
        <img src="../assets/sport-yue-basketball.jpg" alt="">
        <h3>篮球</h3>
        <p>篮球是一项非常有趣的运动，可以增强体质，提高协调性。<br>想相约打篮球的同学可以加入QQ群聊：728709823哦！</p>
      </div>
      <div class="box">
        <img src="../assets/sport-yue-badminton.jpeg" alt="">
        <h3>羽毛球</h3>
        <p>羽毛球是一项非常优雅的运动，可以提高灵活度和反应能力。<br>想相约打羽毛球的同学可以加入QQ群聊：728709823哦！</p>
      </div>
      <div class="box">
        <img src="../assets/sport-yue-table tenis.jpeg" alt="">
        <h3>乒乓球</h3>
        <p>乒乓球是一项非常有趣的运动，可以锻炼身体，缓解压力。<br>想相约打乒乓球的同学可以加入QQ群聊：728709823哦！</p>
      </div>
      <div class="box">
        <img src="../assets/sport-yue-swim.webp" alt="">
        <h3>游泳</h3>
        <p>游泳是一项非常有益的运动，可以增强心肺功能，改善睡眠。<br>想相约去游泳的同学可以加入QQ群聊：728709823哦！</p>
      </div>
      <div class="box">
        <img src="../assets/sport-yue-other.png" alt="">
        <h3>其他</h3>
        <p>其他运动包括游泳、瑜伽、健身等，都是非常健康的运动。<br>想约其他运动的同学可以联系工作人员(QQ)：2960939323哦！</p>
      </div>
    </section>

    <div class="relevant" id="relevant">
      <span>相关赛事</span>
      <ul>
        <li><a href="https://lxs.sicnu.edu.cn/p/0/?stid=st_app_news_i_x636961044832000965">四川师范大学第五十六届学生运动会</a></li>
        <li><a href="https://cs.sicnu.edu.cn/p/0/?StId=st_app_news_i_x638159552889832808">伴月而行，光影不辍-记计算机科学学院夜跑活动</a></li>
        <li><a href="https://mmc.sicnu.edu.cn/p/0/?StId=st_app_news_i_x638182740086952179">四川师范大学研究生第四届“鸿狮杯”乒乓球比赛</a></li>
        <li><a href="https://gh.sicnu.edu.cn/_wx/_wx_home_news_i.aspx?iid=638213014610918111">“爱成都 迎大运”四川师范大学第四届教职工游泳比赛</a></li>
        <li><a href="https://ygzx.sicnu.edu.cn/_wx/_wx_home_news_i.aspx?iid=638188335574325241">“共赴大运，领跑研途”——2022-2023学年第二学期影视与传媒学院研究生夜跑活动</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require('../assets/sport-qingchun1.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun2.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun3.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun4.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun5.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun6.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun7.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun8.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun9.jpg'), alt: '' },
        { src: require('../assets/sport-qingchun10.jpg'), alt: '' }
      ],
      currentImageIndex: 0
    };
  },
  mounted() {
    // 显示第一张图片
    this.images[this.currentImageIndex].style.opacity = 1;

    // 设置定时器，每2秒钟显示下一张图片
    setInterval(this.showNextImage, 2000);
  },
  methods: {
    showNextImage() {
      // 隐藏当前图片
      this.images[this.currentImageIndex].style.opacity = 0;

      // 增加当前图片的索引
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

      // 显示下一张图片
      this.images[this.currentImageIndex].style.opacity = 1;
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #bbb;
}

.container {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.header {
  padding: 30px;
  text-align: center;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.nav a {
  font-size: 20px;
  padding: 10px 60px;
  display: inline-block;
  color: #333;
  text-decoration: none;
}

.nav a:hover {
  background: #bbb;
}

.section {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.box {
  width: 42%;
  height: 500px;
  padding: 0 45px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.box img {
  width: auto;
  height: 500px;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.box h3 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  padding: 15px 10px 0 10px;
  margin: 0;
  margin-top: auto;
}

.box p {
  font-size: 16px;
  color: #666;
  padding: 15px;
  margin: 0;
  margin: auto;
}

.box img:hover {
  transform: scale(1.2);
}

#campus-sports {
  background-color: #fff;
  position: relative;
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

#slideshow {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}

#slideshow img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.section1 {
  margin-bottom: 50px;
}

.section2 {
  margin-top: 50px;
}

.yue,
.qingchun,
.relevant {
  padding: 30px;
  font-size: 20px;
}

.relevant a {
  color: #333;
}
</style>
