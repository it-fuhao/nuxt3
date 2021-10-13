<template>
  <div>
    这是主体内容
    <button @click="handleRouter">跳转</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  layout: 'custom', // 使用layouts布局
  setup() {
    const router = useRouter();
    // 路由跳转
    const handleRouter = () => {
      router.push({ name: 'product' });
    }
    return {
      handleRouter
    }
  }
})
</script> 