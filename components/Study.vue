<template>
    <div>
    <div class="cssel">
        <el-carousel :interval="4000" type="card" height="25vw">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
           <img :src="item.idView" class="imgstyle">
        </el-carousel-item>
        </el-carousel>
    </div>
    <div class="cssnews">
        <news></news>
    </div>
    </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { reactive, toRefs } from "vue"
import News from './News.vue'
export default {
    components:{
    
        News
    },
    setup(){
        return {
            imagesbox:[
                {id:0,idView:require("@/assets/meitu1.png")},      
                {id:1,idView:require("@/assets/meitu2.png")},
                {id:2,idView:require("@/assets/meitu3.png")},
                {id:2,idView:require("@/assets/meitu4.png")},
                {id:2,idView:require("@/assets/meitu5.png")},
                {id:2,idView:require("@/assets/meitu6.png")}
            ]
        }
    }
}
</script>

<style  lang="scss" scoped>
.first_title{//“学习攻略”的设置
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: rgb(245, 253, 253);
}
.cssel{//轮播图位置
    height: 15vw;
    margin-top: 150px;
}
.imgstyle{//图片设置
    width: 100%;
    height: 100%;
}
.cssnews{//通知栏位置
    height: 45vw;
    margin-top: 200px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>