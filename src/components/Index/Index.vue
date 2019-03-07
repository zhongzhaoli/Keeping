<template>
    <section>
        <div class="right_drawer">
            <div class="ke_right_drawer_close_div">
                <i class="layui-icon layui-icon-close" @click="right_menu()"></i>
            </div>
            <ul>
                <li>首页</li>
                <li>课程</li>
                <li>加入我们</li>
            </ul>
        </div>
        <div class="ke_banner">
            <div class="ke_banner_header">
                <div class="logo">Keeping</div>
                <div class="ke_right_menu" @click="right_menu()">
                    <i class="layui-icon layui-icon-shrink-right"></i>
                </div>
            </div>
            <div class="ke_banner_text">
                <div>Just Do It!</div>
            </div>
            <video autoplay loop="loop" src="@/assets/banner.mp4"></video>
            <div class="ke_small_banner"></div>
        </div>
        <div class="ke_body">
            <div class="ke_why_big">
                <div class="ke_why_div layui-col-md8 layui-col-md-offset2">
                    <img src="@/assets/images/pic01.jpg">
                    <div class="ke_why_text_div">
                        <div class="ke_why_title">
                            <h1>LOREM IPSUM DOLOR</h1>
                            <div>maecenas feugiat ex purus, quis volutpat lacus placerat</div>
                        </div>
                        <hr>
                        <div class="ke_why_content">
                            <div>Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien pretium tellus venenatis, at egestas urna ornare.</div>
                            <br>
                            <div>Vivamus fermentum nibh vel pharetra blandit. Cras a purus urna. Sed et libero ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id hendrerit felis. Nulla viverra tempor dui at congue. Pellentesque quis nulla ornare, congue nisi id, finibus nulla. Aliquam sit amet hendrerit purus. Donec libero massa, posuere fermentum eros sit amet, maximus fringilla augue. Maecenas at rhoncus lorem. Vivamus ultricies consequat est, efficitur convallis libero. Vivamus rutrum semper mauris, vitae consequat eros tempor ac. Pellentesque et ornare sapien</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ke_course_div">
                <div class="ke_course_list layui-col-lg8 layui-col-md10 layui-col-sm12 layui-col-xs12 layui-col-lg-offset2 layui-col-md-offset1 layui-col-sm-offset0 layui-col-xs-offset0">
                    <div class="layui-col-lg4 layui-col-md4 layui-col-sm4 layui-col-xs12">
                        <h1>课程一</h1>
                        <div class="course_text">
                            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
                        </div>
                        <button class="ke_button">原始按钮</button>
                    </div>
                    <div class="layui-col-lg4 layui-col-md4 layui-col-sm4 layui-col-xs12">
                        <h1>课程二</h1>
                        <div class="course_text">
                            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
                        </div>
                        <button class="ke_button">原始按钮</button>
                    </div>
                    <div class="layui-col-lg4 layui-col-md4 layui-col-sm4 layui-col-xs12">
                        <h1>课程三</h1>
                        <div class="course_text">
                            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
                        </div>
                        <button class="ke_button">原始按钮</button>
                    </div>
                </div>
            </div>
            <div class="ke_room_big">
                <div class="ke_room_div layui-col-lg8 layui-col-md10 layui-col-sm12 layui-col-xs12 layui-col-lg-offset2 layui-col-md-offset1 layui-col-sm-offset0 layui-col-sm-offset0">
                    <div class="layui-col-lg6 layui-col-md6 layui-col-sm12 layui-col-xs12">
                        <img src="@/assets/images/pic02.jpg" alt="">
                        <div class="room_text">
                            <div class="room_title">
                                <h1>LOREM IPSUM DOLOR</h1>
                                <div>maecenas feugiat ex purus quis volutpat.</div>
                            </div>
                            <hr>
                            <div class="room_content">
                                <div>Vivamus fermentum nibh vel pharetra blandit. Cras a purus urna. Sed et libero ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id hendrerit felis. Nulla viverra tempor dui at congue. Pellentesque quis nulla ornare, congue nisi id, finibus nulla. Aliquam sit amet hendrerit purus. Donec libero massa, posuere fermentum eros sit amet, maximus fringilla augue. Maecenas at rhoncus lorem. Vivamus ultricies consequat est, efficitur convallis libero. Vivamus rutrum semper mauris, vitae consequat eros tempor ac. Pellentesque et ornare sapien</div>
                            </div>
                        </div>
                    </div>
                    <div class="layui-col-lg6 layui-col-md6 layui-col-sm12 layui-col-xs12">
                        <img src="@/assets/images/pic03.jpg" alt="">
                        <div class="room_text">
                            <div class="room_title">
                                <h1>LOREM IPSUM DOLOR</h1>
                                <div>maecenas feugiat ex purus quis volutpat.</div>
                            </div>
                            <hr>
                            <div class="room_content">
                                <div>Vivamus fermentum nibh vel pharetra blandit. Cras a purus urna. Sed et libero ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id hendrerit felis. Nulla viverra tempor dui at congue. Pellentesque quis nulla ornare, congue nisi id, finibus nulla. Aliquam sit amet hendrerit purus. Donec libero massa, posuere fermentum eros sit amet, maximus fringilla augue. Maecenas at rhoncus lorem. Vivamus ultricies consequat est, efficitur convallis libero. Vivamus rutrum semper mauris, vitae consequat eros tempor ac. Pellentesque et ornare sapien</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ke_us">
                <h1>联系我们</h1>
                <div class="us_text">
                    Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="less">
    @import "./index.less";
</style>
<script>
    export default {
        data() {
            return{};
        },
        methods:{
            right_menu(){
                $(".right_drawer").toggleClass("right_drawer_show");
            },
            scorll_listen(){
                window.onscroll= function(){
                    let now_top = document.documentElement.scrollTop;
                    if(now_top > 0){
                        if(!$(".ke_banner_header").hasClass("ke_banner_fixed")){
                            $(".ke_banner_header").addClass("ke_banner_fixed");
                        }
                    }
                    else{
                        $(".ke_banner_header").removeClass("ke_banner_fixed");
                    }
                }
            }
        },
        created() {
            this.scorll_listen();
        }
    }
</script>