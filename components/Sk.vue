<template>
    <div>
    <!-- 跳转连接 -->
    <div class="links">
        <a href="https://jwc.sicnu.edu.cn/Default.aspx">
            <div class="link">
                <div class="circle">
                    <img src="css/static/images/icons/manage.png" alt="">
                </div>
                <div class="link-name">
                    <div>教务管理系统</div>
                </div>
            </div>
        </a>
        <a href="http://202.115.196.204/bylw/">
            <div class="link">
                <div class="circle">
                    <img src="css/static/images/icons/system.png" alt="">
                </div>
                <div class="link-name">
                    <div>毕业论文系统</div>
                </div>
            </div>
        </a>
        <a href="http://121.37.22.38/">
            <div class="link">
                <div class="circle">
                    <img src="css/static/images/icons/success.png" alt="">
                </div>
                <div class="link-name">
                    <div>教学成果管理系统</div>
                </div>
            </div>
        </a>
        <a href="https://sicnu.yuketang.cn/">
            <div class="link">
                <div class="circle">
                    <img src="css/static/images/icons/class.png" alt="">
                </div>
                <div class="link-name">
                    <div>雨课堂教学平台</div>
                </div>
            </div>
        </a>
        <a href="http://www.zhihuishu.com/">
            <div class="link">
                <div class="circle">
                    <img src="css/static/images/icons/learn.png" alt="">
                </div>
                <div class="link-name">
                    <div>智慧树教学平台</div>
                </div>
            </div>
        </a>
        <a href="http://sicnu.xuetangx.com/">
            <div class="link">
                <div class="circle">
                    <img src="css/static/images/icons/other.png" alt="">
                </div>
                <div class="link-name">
                    <div>学堂在线教学平台</div>
                </div>
            </div>
        </a>
    </div>
    <div class="bottom">
        <div class="bottom-content">
            <div class="bottom-top">
                <div class="float left opacity">
                    <p>狮子山校区</p>
                    <p>成都市锦江区静安路5号</p>
                    <p>邮编:610068</p>
                </div>
                <div class="line-left opacity-mini"></div>
                <div class="float right opacity">
                    <p>教务处邮箱</p>
                    <p>jwc@sicnu.edu.cn</p>
                </div>
                <div class="line-right opacity-mini"></div>
                <div class="float center opacity">
                    <p>成龙校区</p>
                    <p>成都市龙泉驿区成龙大道二段1819号</p>
                    <p>邮编:610101</p>
                </div>
            </div>
            <hr class="opacity-mini">
            <div class="bottom-bottom">
                All Right Reserved . 版权所有 四川师范大学教务处 2022 <a href="aaa/login.aspx">管理登录</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

</script>

<style>
@charset "utf-8";

/* CSS Document */

/*-----bottom-----*/
.bottom{
    width: 100%;
    height: 100px;
    
    margin: 50px auto;
    background-color: #1f6694;
    background-color: #114f78;
}
.bottom-content{
    width: 1180px; 
    margin: 0 auto;
    padding-top: 5px;
}
.line-left{
    border-right: 1px solid #eee;
    opacity: 0.1; 
    margin-left: 0px;
    margin-top: 5px;
    float: left;
    height: 80px;
}


.line-right{
    border-right: 1px solid #eee;
    opacity: 0.1; 
    margin-left: 0px;
    margin-top: 5px;
    float: right;
    height: 80px;
}
.float p{
    font-size: 13px;
    line-height: 15px;
    height: 15px;
    padding-top: 10px;
    color: white;
    
}
.float.left{
    float: left;
    width: 30%;
    height: 90px;   
    text-align: center;   
}

.float.right{
    float: right;
    width: 30%;
    height: 90px;
    text-align: center;  
}
.float.center{
    height: 90px;
    text-align: center;
    
}
.bottom-bottom{
    width: 100%;
    margin: 10px auto;
    text-align: center;

    color: #e2e2e2;
    font-size: 13px;
}

@media screen and (max-width: 1000px)
{
.bottom { width:1200px; }
}

/* CSS Document */
.content {
    /* width: 1180px;  */
    width: 1300px;
    height: auto; 
    overflow:auto;
    margin: 30px auto;
    /* background-color: pink; */
}

.left{
    width: 49%;
    /* height: auto; */
    /* background-color: blueviolet;    */
    float: left;
}
.right {
    width: 49%;
    /* height: auto; */
    /* background-color: greenyellow; */
    margin-right: 0px;
    float: left;
}

.border{
    /* border-radius: 3px; */
    /* border-top-left-radius: 3px;
    border-top-right-radius: 3px; */
    margin-bottom: 15px;
    /* border: 2px solid #ddd;   */
}



/*-------left-one-content-------*/
ul{
    list-style: none;
}
ul.imglist{
    width: 100%;
    overflow: hidden;
}
ul.imglist li{
    float: left;
    width: 52px;
    padding: 10px 1px 0;
}
ul.imglist li a{
    text-decoration: none;
}
ul.imglist li img{
    display: block;
    width: 30px;
    border-style: none; 
    margin: 0 auto;
    /* border: 1px solid #999;
    border-radius: 20px; */
    /* behavior: url(/static/PIE.htc); */
   
}
ul.imglist li span{
    font-weight: 600;
    color: #777777;
    display: block;
    font-size: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 0 auto;
}
select {
    width: 100%;
    padding: 2px;
    border-style: none;
    border: 1px solid #bbb;
    font-size: 12px;
    margin: 5px 0;
    
}
option:hover {  
    background-color: #ccc;   
}


/*-------notify--------*/

.notify{
    width: 100%;
    height: auto;
    overflow: hidden;
    /* background-color: #eee;     */
}
.right-title{
    font-size: 20px;
    font-weight: 600;
    color: #1f6694;
    /* color: #92110e; */
    margin-left: 7px;
    margin-right: 7px;
    padding: 8px 5px;
    height: 25px;
    line-height: 25px;
    border-bottom: 2px solid #1f6694;
    
}

.right-title a{
    float: right;
    font-size: 14px;
    color: #1f6694;
    /* color: #c1def0; */
}

.right-title a:hover{
    color: #1f6694;
}
.right-title img {
    width: 25px;
    height: 25px;
    /* background-color: #276e51; */
    float: left;
    padding-right: 10px;
    
}


/* -------------------通知列表样式------------------ */
.list
{
    background-color:#fff;  
    font-size: 14px; 
    word-spacing: 2px;
    /* border:1px solid #ddd; */
    padding: 10px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
   -o-text-overflow: ellipsis;
   
}


.list ul li .list-one{ 
    border: 1.6px solid #c1def0;
    padding: 4px;
    margin-top: 3px;
    /* background-color: #ccc; */

}

.list ul li .list-one .time{
    float:left; 
    text-align: center;
    font-family:Arial;
    padding: 5px 4px;
    background-color: #1f6694;
    color: white;
    margin-top: 0px;
    height: 20px;
    width: 40px;
}
.list ul li .date{
   font-size: 15px;
   height: 20px;
   line-height: 20px;
}
.list ul li .list-one .content{
    /* float:left;  */
    width: 90%;
    line-height: 30px;
    height: 30px;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
    margin: 0;
    padding-left: 10px;
}
.list ul li .list-one .content:hover{
    background-color: #edf7fe;
}
.list ul li .content a{
    color: #333;
    font-weight: 500;
    text-decoration: none;
}
.list ul li .content a:hover{
    color: #1f6694;
    /* text-decoration: none; */
   /* font-size: 13px; */
}


/* -----------------新闻列表样式--------------------- */
.news .list
{
    background-color:#fff;  
    /* border:1px solid #ddd; */
    padding: 10px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
   -o-text-overflow: ellipsis;
   
}

.news .list ul li{ 
    height:55px; 
    /* line-height:50px;  */
    /* white-space:nowrap;
    text-overflow: ellipsis;
    overflow:hidden; */
}
.news .list ul li .list-one{ 
    border: 2px solid #c1def0;
    padding: 2px;
    margin-top: 31px;
    height: 65px;
    /* background-color: #ccc; */

}
.news .list ul li .list-one-red{ 
    border: 2px solid #f1dfdf;
    padding: 2px;
    margin-top: 31px;
    height: 65px;
    /* background-color: #ccc; */

}

.news .list ul li .list-one .time{
    float:left; 
    text-align: center;
    font-family:Arial;
    font-size: 15px;
    padding: 5px;
    background-color: #1f6694;
    color: white;
    margin-top: 0px;
    height: 55px;
    line-height: 28px;
    width: 55px;
}
.news .list ul li .list-one .red{
    float:left; 
    text-align: center;
    font-family:Arial;
    font-size: 15px;
    padding: 5px;
    background-color: #92110e;
    color: white;
    margin-top: 0px;
    height: 55px;
    line-height: 28px;
    width: 55px;
}
.news .list ul li .date{
   font-size: 20px;
}
.news .list ul li .list-one .content{
    /* float:left;  */
    width: 86%;
    font-size: 15px;
    word-spacing: 2px;
    line-height: 65px;
    height: 65px;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
    margin: 0;
    padding-left: 20px;
}
.news .list ul li .list-one .content:hover{
    background-color: #edf7fe;
}
.news .list ul li .list-one-red .content:hover{
    background-color: #f8ecec;
}
.news .list ul li .content a{
    color: #333;
    font-weight: 500;
    text-decoration: none;
}
.news .list ul li .content a:hover{
    color: #1f6694;
    /* background-color: #c1def0 !important; */
    /* text-decoration: none; */
   /* font-size: 13px; */
}


/* -----------------教务微服务--------------------- */
.service{
    /* margin-top: 50px; */
    /* margin-bottom: 50px; */
    /* background-color: paleturquoise; */
    /* height: 100px; */
    position: relative;
    width: 100%;
    height: 390px;
}

.service img{
    height: 390px;
    width: 100%;
    /* z-index: -1; */
}
.service .service-border{
    /* background-color: palevioletred; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    /* margin: 0 auto; */
    
}

.service .service-content{
    text-align: center;
    height: 200px;
    width: 100%;
}

.service-title{
    /* width: 200px; */
    font-size: 25px;
    color: white;
    text-align: center;
}
.service-all{
    /* background-color: rgb(215, 215, 167) !important; */
    height: 200px;
    margin: 0 auto;
    width: 1250px;
    margin-top: 90px;
}
.service-one:hover{
    background-color: #13486b;

}
.service-one{
    margin-right: 1px;
    background-color: rgba(255, 255, 255, 0.3);
    height: 190px;
    width: 150px;
    float: left;
}
.service-one .circle{
    border-radius: 100%;
    background-color: #fff;
    width: 90px;
    height: 90px;
    margin: 27px auto;
}
.service-one .circle img{
    width: 45px;
    height: 45px;
    margin-top: 20px;
}
.service-one .service-name{
    color: white;
    font-size: 20px;
    font-weight: 500;
}



/* -----------------跳转链接 ---------------*/
.links{
    width: 1300px;
    height: 50px;
    margin: 70px;
    position: fixed;
    bottom: 0;
}
.link{
    width: 15.7%;
    height: 90px;
    background-color: #f2f2f2;
    margin: 0 5px;
    float: left;
}
.link:hover{
    /* background-color: #1f6694; */
    border: 2px solid #c1def0;
    /* background-color: #c1def0; */
}
.link .circle{
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: #1f6694;
    text-align: center;
    float: left;
    margin-top: 20px;
    margin-left: 12px;

}
.link .circle img{
    width: 35px;
    margin-top: 6px;
    /* margin-left: 5px; */
    
}
.link .link-name{
    /* background-color: #13486b; */
    margin-top: 20px;
    height: 50px;
    /* line-height: 25px; */
    line-height: 50px;
    width: 67%;
    float: right;
    color: #333;
    font-weight: 700;

}
.link .link-name .main-name{
    font-size: 25px;
}

</style>