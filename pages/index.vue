<template>
  <div>
    这是主体内容
    <van-button type="primary" @click="handleRouter">跳转</van-button>
  </div>
</template>
<script lang="ts">
export default defineNuxtComponent({
  layout: 'custom', // 使用layouts布局
  head() {
    return {
      title: 'nuxt3 demo 首页'
    };
  },
  asyncData() {
    // console.log(process);
  },
  setup() {
    const router = useRouter();
    const aaa = '123';
    // 路由跳转
    const handleRouter = () => {
      router.push({ name: 'test' });
    };
    return {
      handleRouter
    };
  }
});
</script>
