<template>
  <div class="page">
    <van-collapse v-model="activeNames" class="index">
      <van-collapse-item title="路由跳转" name="1">
        <!-- <van-button type="primary" @click="goToProductList">跳转页面</van-button> -->
      </van-collapse-item>
      <van-collapse-item title="pinia状态管理" name="2">
        <p>这是pinia/useCommon模块中的count: {{ commonStore.count }}</p>
        <p><input type="text" v-model="commonStore.count"></p>
        <!-- <p>这是vuex/productModule模块中的productId: {{ productModuleData.productId }}</p> -->
        <p>支持持久化，刷新页面查看效果</p>
        <van-button type="primary" @click="changeCount">pinia改变count</van-button>
        <van-button type="primary" @click="changeCountAsync">pinia改变count(异步)</van-button>
      </van-collapse-item>
      <van-collapse-item title="异步请求request" name="3">
        <van-button type="primary" @click="handleUserInfo">点我发请求</van-button>
        <div class="area_box" v-if="userInfo.name">
          获取到数据，当前用户是：{{ userInfo.name }}
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { Toast } from 'vant';
// import { getUserInfo } from '@/server/api/common';
import Store from '@/store/index';
const userInfo = reactive({});
const activeNames = ref(['1', '2', '3']);
// const router = useRouter();
// 查询用户信息
const handleUserInfo = async () => {
  // router.push({ name: 'product' });
  // userInfo.name = "张三";
  // const userInfoRes = await getUserInfo({
  //   channelType: '1',
  //   saleCode: 'MY_*0mS5C7hu9MJgPKPi38bIBtqcIYuReeCK9sOtWGhThR6k!'
  // })
  // const res = await $axios.$post({
  //   url: '/apigateway/api/user/getUserInfo',
  //   data: {
  //     channelType: '1',
  //     saleCode: 'MY_*0mS5C7hu9MJgPKPi38bIBtqcIYuReeCK9sOtWGhThR6k!'
  //   }
  // })
  // userInfo = res
}
// console.log(process);

// pinia
const commonStore = Store.useCommon();
// 同步修改状态
const changeCount = () => {
  commonStore.setCount();
}
// 异步修改状态
const changeCountAsync = async () => {
  Toast.loading({message: '等待修改状态'});
  try {
    await commonStore.setCountAsync();
  } catch (error) {
    return;
  } finally {
    Toast.success({message: '修改完毕'});
  }
}
</script>

<style lang='scss' scoped>
  .page {
    font-size: 14px;
  }
  .area_box {
    width: 100%;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
  }
  p {
    font-size: 15px;
    margin-bottom: 8px;
  }
</style>

