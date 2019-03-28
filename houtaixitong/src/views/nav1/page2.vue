<template>
    <div style="height: 100%;overflow: auto" ref="father" v-on:scroll="getH">
      <!--<video src="http://tvideo.spriteapp.cn/video/2018/1009/5bbc6b993b480_wpd.mp4" autoplay controls></video>-->
      <div class="sd" style="" v-for="aa in music">
        <div style="text-align: left;margin-top: 15px;height: 60px;overflow: hidden"><img :src="aa.header" alt="" style="width: 30px;height: 30px;margin-right: 10px;vertical-align: middle;"><span style="display: inline-block;height: 60px;line-height: 60px;font-weight: bold">{{aa.username}}</span><span style="float: right;height: 60px;line-height: 60px;margin-right: 30px;">{{aa.passtime}}</span></div>
        <div style="font-weight: bold;margin-bottom: 10px;max-width: 1000px;margin: auto">{{aa.text}}</div>
        <div>
          <video style="width: 400px;height: 300px;" :oncanplaythrough="aa.video" v-if="aa.type == 'video'" :src="aa.video" controls></video>
          <img style="max-width: 400px" v-if="aa.type == 'image'" :src="aa.image" alt="">
          <img style="max-width: 400px" v-if="aa.type == 'gif'" :src="aa.gif" alt="">
          <p style="max-width: 500px;margin: auto" v-if="aa.type == 'text'">{{aa.text}}</p>
        </div>
      </div>
      <div v-show="scroh>600" v-on:click="goTop" style="width: 50px;height: 50px;position: fixed;right: 30px;bottom: 30px;">
        <img style="width: 100%;height: 100%;" src="../../assets/1212.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "page2",
      data(){
          return {
            music:[],
            scroh:0
          }
      },
      created: function(){
        this.getImg()              //定义方法
      },
      methods: {
        getImg: function(){
          var that = this;
          that.$http({           //调用接口
            method:'GET',
            url:'https://www.apiopen.top/satinGodApi?type=1&page=1'
          }).then(function(response){  //接口返回数据
              console.log(response.data);
              this.music = response.data.data;
          },function(error){
          })
        },
        getH:function () {
          var el = event.currentTarget;
          this.scroh = el.scrollTop;
          console.log(this.scroh)
        },
        goTop:function () {
          this.$refs.father.scrollTop = 0
        }
        // locah:function () {
        //   var el = event.currentTarget;
        //   console.log(el.id);
        //   var url = el.id;
        //   window.open(url,"_blank");
        // }
      }
    }
</script>

<style scoped>

</style>
