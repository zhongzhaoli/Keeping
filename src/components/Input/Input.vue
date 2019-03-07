<template>
    <section>
        <div class="ke_body">
            <div class="layui-container ke_input_div">
                <div class="layui-form layui-form-pane">
                    <div class="layui-tab layui-tab-brief" lay-filter="user">
                        <ul class="layui-tab-title">
                            <li class="layui-this">发布课程</li>
                        </ul>
                    </div>
                    <div class="layui-form layui-tab-content"> 
                        <div class="layui-row">
                            <div class="layui-col-md3">
                                <label class="layui-form-label">所在专栏</label>
                                <div class="layui-input-block">
                                    <select lay-verify="required" name="class" lay-filter="column"> 
                                        <option></option> 
                                        <option value="0">提问</option> 
                                        <option value="99">分享</option> 
                                        <option value="100">讨论</option> 
                                        <option value="101">建议</option> 
                                        <option value="168">公告</option> 
                                        <option value="169">动态</option> 
                                    </select>
                                </div>
                            </div>
                            <div class="layui-col-md9 padd-15">
                                <label class="layui-form-label">标题</label>
                                <div class="layui-input-block">
                                    <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">
                                </div>
                            </div>
                        </div>
                        <div class="layui-row">
                            <div class="layui-form-item">
                                <textarea name="demo" id="demo" class="layui-hide">
                                </textarea>
                            </div>
                        </div>
                        <button class="layui-btn">发布</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data(){
            return {};
        },
        created(){

        },
        mounted(){
            layui.use(['layedit'], function(){
                let layedit = layui.layedit;
                let index = layedit.build('demo', {
                    //hideTool: ['image']
                    uploadImage: {
                        url: 'http://localhost/test',
                        type: 'post'
                    }
                    //,tool: []
                    //,height: 100
                });
            });
        }
    }
</script>
<style lang="less">
    @import "./input.less";
</style>