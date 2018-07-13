<template>
    <scroller class="scroller">
      <div class="header"> 
        <div class="headerleft">
          <image :src="imageLoader.loadImage('icon_car@2x.png')" />
        </div>
        <div class="headerright"> 
          <p><text>物流公司：{{wlgs}}</text></p>
          <p style="padding-top:14px;"><text>物流单号：{{wldh}}</text></p>
        </div>
      </div>
      <wxc-simple-flow :list="testData" :themeColor="themeColor" style="padding-left:20px;"></wxc-simple-flow>
    </scroller>
</template>
<style scoped>
  .scroller {
    flex: 1;
  }
  figure {
    width: 31pt;
    height: 23pt;
  }
  .header{
    flex-direction: row;
    height: 120px;
    background-color: white;
    margin-bottom: 20px;
  }
  .headerleft{
    flex: 0.18;
    justify-content:center;
    align-items:center;

  }
  .headerright{
    flex: 0.82;
    justify-content:center;
  }
  .headerright p{
    font-size: 24px;
    color: rgba(153, 153, 153, 1)
  }
  </style>

<script>
  import { WxcSimpleFlow } from 'weex-ui';
  import Title from '../_mods/title.vue';
  import Category from '../_mods/category.vue';
  import { setTitle } from '../_mods/set-nav';
  import index from '../index.vue';
  import { WxcMinibar } from 'weex-ui';
  
  
  import image from '../config';
  
  export default {    
    components: { WxcSimpleFlow ,Title,Category},
    mounted () {
      setTitle('Cell');
    },
    created() {
      WxcMinibar.props.title.default = '11111554'
    },
    data: () => ({
      imageLoader:image,
      titleLabel: '',
      folding: false,
      themeColor: {
        lineColor: '#EBEBEB',
        pointInnerColor: '#EBEBEB',
        pointBorderColor: '#EBEBEB',
        highlightTitleColor: '#E50011',
        highlightPointInnerColor: '#E50011',
        highlightPointBorderColor: '#d46262'
      },
      wlgs:'中通快递',
      wldh:'88510015477921',
      testData: [
        {
          'date': '2018-05-12  09:59:59',
          'desc': '',
          'highlight': true,
          'title': '商家正在通知快递公司揽件'
        },
        {
          'date': '2018-05-12  09:59:59',
          'desc': '',
          'title': '您的包裹已出库'
        },
        {
          'date': '2018-05-12  09:59:59',
          'desc': '',
          'title': '您的订单待配货'
        },
        {
          'date': '2018-05-12  09:59:59',
          'desc': '',
          'title': '您的订单开始处理'
        }
      ]
    })
}
</script> 