<template>
  <div>
    <van-button type="primary" @click="handleRouter">
      跳转测试页面
    </van-button>
    <van-cell
      v-for="(functional, index) in list"
      :key="index"
      :title="functional.title"
      is-link
      @click="handleFunctional(functional)"
    />
  </div>
</template>
<script lang="ts" setup>

  interface IFunctional {
    id: number;
    title: string;
    componentName: string;
  }

const router = useRouter();

const list = ref<IFunctional[]>([
  { id: 1, title: '动态组件测试', componentName: 'parent-child' },
]);

const handleFunctional = (functional: IFunctional) => {
  router.push({
    name: 'home',
    query: {
      componentName: functional.componentName
    }
  });
};
// 路由跳转
const handleRouter = () => {
  router.push({ name: 'test' });
};
</script>
<script lang="ts">
export default defineNuxtComponent({
  layout: 'custom', // 使用layouts布局
  head () {
    return {
      title: 'nuxt3 demo 首页'
    };
  }
});
</script>
