<template>
  <div>
    <p>
      账号：<input type="text" :value="userName" @input="(e: Event) => inputChange(e, 'userName')">
    </p>
    <p>
      密码：<input type="text" :value="password" @input="(e: Event) => inputChange(e, 'password')">
    </p>
    <!-- <van-field v-model="childUserName" label="用户名" placeholder="请输入用户名" @input="(e: Event) => inputChange(e, 'userName')" />
    <van-field v-model="password" label="密码" placeholder="请输入密码" @input="(e: Event) => inputChange(e, 'password')" /> -->
    <van-button type="primary" @click="handleChange">
      子组件改变数据
    </van-button>
  </div>
</template>
<script lang="ts" setup>
type TPropsName = 'userName' | 'password';

const { userName, password } = defineProps({
  userName: { type: String, default: '' },
  password: { type: String, default: '' },
});

const emit = defineEmits(['update:userName', 'update:password']);

const inputChange = (e: Event, propsName: TPropsName) => {
  emit(`update:${propsName}`, (e.target as HTMLInputElement).value);
};

const handleChange = () => {
  emit('update:userName', 'child');
  emit('update:password', '654321');
};
</script>
