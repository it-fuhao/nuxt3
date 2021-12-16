<template>
  <component :is="functional" />
</template>
<script lang="ts" setup>

const route = useRoute();
const { componentName } = route.query;

const functional = shallowRef();

onBeforeMount(async () => {
  const components = await import(`../../functional/${componentName}.vue`);
  functional.value = components.default;
});

</script>
