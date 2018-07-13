<template>
  <div class="container" >
    <div class="demo">
      <wxc-minibar  
                   :left-button="leftButton"
                   background-color="#C62418"
                   text-color="#FFFFFF"
                   right-text="关闭"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
    </div>
    <router-view />
  </div>  
</template>
<style scoped>
.container {
    flex: 1;
    background-color: rgb(244, 244, 244)
  }
</style>

<script>
  import { WxcMinibar } from 'weex-ui';
  const modal = weex.requireModule('modal');
  console.log(WxcMinibar);

  export default {
    components: { WxcMinibar },
    data: () => ({
      titleLabel: 'test',
      rightButton: "",
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png'
    }),
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    },
    created() {
      WxcMinibar.props.title.default = '查看物流'
    }
 }
</script>
