<template>
  <div class="page">
    <van-collapse v-model="activeNames" class="index">
      <van-collapse-item title="路由跳转" name="1">
        <!-- {{ userInfo }} -->
        <!-- <van-button type="primary" @click="goToProductList">跳转页面</van-button> -->
      </van-collapse-item>
      <van-collapse-item title="pinia状态管理" name="2">
        <p>这是pinia/common模块中的count: {{ commonStore.count }}</p>
        <p>这是pinia/product模块中的productId: {{ productStore.productId }}</p>
        <p><input type="text" v-model="commonStore.count"></p>
        <p>支持持久化，刷新页面查看效果</p>
        <van-button type="primary" @click="changeCount">count++</van-button>
        <van-button type="primary" @click="changeCountAsync">count++(异步)</van-button>
        <van-button type="primary" @click="changeProductId">productId--</van-button>
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
<script setup lang='ts'>
import { Toast } from 'vant';
import { getUserInfo } from '@/server/api/common';
import Store from '@/store/index';

const activeNames = ref(['1', '2', '3']);

// 查询用户信息
let userInfo = reactive({name: ''});
const handleUserInfo = async () => {
  let res;
  Toast.loading('等待修改状态');
  try {
    res = await getUserInfo({
      channelType: '1',
      saleCode: 'MY_*0mS5C7hu9MJgPKPi38bIBtqcIYuReeCK9sOtWGhThR6k!'
    })
  } catch (error) {
    Toast.fail({message: error.message});
    return;
  } finally {
    Toast.clear();
  }
  userInfo.name = res.data.name;
}
// console.log(process);

// pinia
const commonStore = Store.useCommon();
const productStore = Store.useProduct();
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
const changeProductId = () => {
  productStore.changeProductId(productStore.productId - 1);
}

// const { data: userInfo } = await useFetch("/apigateway/api/user/getUserInfo", {
//   method: "post",
//   body: {
//     channelType: '1',
//     saleCode: 'MY_*0mS5C7hu9MJgPKPi38bIBtqcIYuReeCK9sOtWGhThR6k!'
//   },
//   headers: {
//     fuckdes: "true"
//   }
// })

// console.log(userInfo.value);
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
  ::v-deep .van-button {
    margin: 4px;
  }
</style>

