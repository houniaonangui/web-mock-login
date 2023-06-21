<template>
    
    <accordion></accordion>
    <!-- backtop -->
    <!-- Scroll down to see the bottom-right button. -->
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { reactive, toRefs } from "vue"
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
import Accordion from './Accordion.vue'
export default {
    components:{
        
        Accordion
    }
}

</script>

<style lang="scss" scoped>
.first_title{
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: rgb(245, 253, 253);
}
</style>