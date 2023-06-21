<template>
  <div class="container">
    <div class="nav">
      <div class="header">
        <h1>好物推荐</h1>
      </div>
      <a href="#diet">零食</a>
      <a href="#dormitory">寝室</a>
      <a href="#dairy">日常</a>
    </div>

    <div class="biaoti" id="diet">
      <p>零食</p>
    </div>
    <div class="aboutwe">
      <div class="aboutwe_left">
        <img src="@/assets/recommend-diet1.jpg" alt="">
      </div>
      <div class="aboutwe_right">
        <p>早餐面包</p>
        <div class="clear">
          <div class="cleartop"></div>
          <div class="clearbottom"></div>
        </div>
        <br>
        <li>自然麦香、芬芳浓郁</li>
        <li>蓬松多空、厚实有嚼劲</li>
        <li>扎实口感、更饱腹、早八必备</li>
        <div class="liaojie"><a href="https://m.tb.cn/h.UzfRcTC?tk=n9TcdrO0YPA">了解更多</a></div>
      </div>
    </div>
    <div class="aboutwe">
      <div class="aboutwe_left">
        <img src="@/assets/recommend-diet2.jpg" alt="">
      </div>
      <div class="aboutwe_right">
        <p>零嘴</p>
        <div class="clear">
          <div class="cleartop"></div>
          <div class="clearbottom"></div>
        </div>
        <br>
        <li>香辣Q弹</li>
        <li>富含膳食纤维</li>
        <li>独立小包、方便携带</li>
        <div class="liaojie"><a href="https://m.tb.cn/h.UBPNLcJ?tk=aMAzdrObFeA">了解更多</a></div>
      </div>
    </div>
    <div class="aboutwe">
      <div class="aboutwe_left">
        <img src="@/assets/recommend-diet3.jpg" alt="">
      </div>
      <div class="aboutwe_right">
        <p>花茶</p>
        <div class="clear">
          <div class="cleartop"></div>
          <div class="clearbottom"></div>
        </div>
        <br>
        <li>可凉可热</li>
        <li>独立袋装、方便</li>
        <li>科学配比、特调花香</li>
        <div class="liaojie"><a href="https://m.tb.cn/h.UBPM7tB?tk=fQEOdrO1OGN">了解更多</a></div>
      </div>
    </div>

    <div class="biaoti" id="dormitory">
      <p>寝室</p>
    </div>
    <div class="aboutwe">
      <div class="aboutwe_left">
        <img src="@/assets/recommend-dormitory1.jpg" alt="">
      </div>
      <div class="aboutwe_right">
        <p>遮光窗帘</p>
        <div class="clear">
          <div class="cleartop"></div>
          <div class="clearbottom"></div>
        </div>
        <br>
        <li>开阔防尘顶</li>
        <li>遮光防蚊 上下两铺通用</li>
        <li>滑帘式遮光布、可移动收纳袋、双向拉链</li>
        <div class="liaojie"><a href="https://m.tb.cn/h.UzvGbTW?tk=Ne1udJnSQJ4">了解更多</a></div>
      </div>
    </div>
    <div class="aboutwe">
      <div class="aboutwe_left">
        <img src="@/assets/recommend-dormitory2.jpg" alt="">
      </div>
      <div class="aboutwe_right">
        <p>床边置物架</p>
        <div class="clear">
          <div class="cleartop"></div>
          <div class="clearbottom"></div>
        </div>
        <br>
        <li>承重力强</li>
        <li>一体式挂篮</li>
        <li>抗压耐磨、加大加宽</li>
        <div class="liaojie"><a href="https://m.tb.cn/h.UylJTFi?tk=jaKldJn6vvB">了解更多</a></div>
      </div>
    </div>
    <div class="aboutwe">
      <div class="aboutwe_left">
        <img src="@/assets/recommend-dormitory3.jpg" alt="">
      </div>
      <div class="aboutwe_right">
        <p>台灯</p>
        <div class="clear">
          <div class="cleartop"></div>
          <div class="clearbottom"></div>
        </div>
        <br>
        <li>一键触控、九段调光</li>
        <li>软硅胶支架设计、解放双手</li>
        <li>减蓝光灯珠、照明舒适明亮</li>
        <div class="liaojie"><a href="https://m.tb.cn/h.UylsySj?tk=Atp3dJniLAY">了解更多</a></div>
      </div>
    </div>

    <div class="biaoti" id="dairy">
      <p>日常</p>
    </div>
    <div class="aboutwe">
      <div class="aboutwe_left">
        <img src="@/assets/recommend-dairy.jpg" alt="">
      </div>
      <div class="aboutwe_right">
        <p>防晒</p>
        <div class="clear">
          <div class="cleartop"></div>
          <div class="clearbottom"></div>
        </div>
        <br>
        <li>高倍防护、精华养肤</li>
        <li>清透水感、补水保湿</li>
        <li>SPF50+、PA+++</li>
        <div class="liaojie"><a href="https://m.tb.cn/h.UAF58gL?tk=J2mHdrOea63">了解更多</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-family: Arial, sans-serif;
}

.nav {
  background-color: #f2f2f2;
  padding: 10px;
  text-align: center;
}

.biaoti {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

.aboutwe {
  display: flex;
  margin-top: 20px;
}

.aboutwe_left {
  flex: 1;
}

.aboutwe_right {
  flex: 2;
  padding-left: 20px;
}

.clear {
  display: flex;
}

.cleartop {
  flex: 1;
  background-color: #ccc;
  height: 10px;
}

.clearbottom {
  flex: 3;
  background-color: #eee;
  height: 10px;
}

.liaojie {
  margin-top: 20px;
}

a {
  color: #007bff;
  text-decoration: none;
}
</style>
