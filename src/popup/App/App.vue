<template>
  <div class="main_app">
    <el-input v-model="token" class="token_input" ></el-input>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const token = ref('')
</script>

<style>
.main_app {
  width: 200px;
}
.token_input {
  width: 100px;
}
</style>
