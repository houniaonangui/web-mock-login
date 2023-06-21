<template>
    <div class="body">
        <div class="shell">
            <div class="box">
                <img src="../assets/pet1.jpg">
                <span>将军</span>
            </div>
            <div class="box">
                <img src="../assets/pet2.jpg">
                <span>梨花</span>
            </div>
            <div class="box">
                <img src="../assets/pet3.jpg">
                <span>黄豆</span>
            </div>
            <div class="box">
                <img src="../assets/pet4.jpg">
                <span>咪咪</span>
            </div>
            <div class="box">
                <img src="../assets/pet5.jpg">
                <span>小白</span>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .body{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110vh;
        //background-color: rgb(243, 230, 241);
    }
    .shell{
        width: 90%;
        height: 500px;
        display: flex;
    }
    .box{
        flex: 1;
        overflow: hidden;
        transition: .5s;
        margin: 0 20px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, .5);
        border-radius: 20px;
        border: 10px solid #fff;
        background-color: #fff;
    }
    .box>img{
        width: 200%;
        height: 85%;
        object-fit: cover;
        transition: .5s;
    }
    .box>span{
        font: 200 45px '优设标题黑';
        text-align: center;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box:hover{
        flex-basis: 40%;
    }
    .box:hover>img{
        width: 100%;
        height: 100%;
    }
</style>