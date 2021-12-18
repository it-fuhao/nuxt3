<template>
  <div>
    <div>
      <van-notice-bar text="父组件" />
      <p>账号：{{ userName }}</p>
      <p>密码：{{ password }}</p>
      <van-button type="primary" @click="handleChange">
        父组件改变数据
      </van-button>
    </div>
    <div>
      <van-notice-bar text="子组件" />
      <Child v-model:userName="userName" v-model:password="password" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Child from './child/child.vue';
const userName = ref('');
const password = ref('');

const handleChange = () => {
  userName.value = 'parent';
  password.value = '123456';
};
</script>
