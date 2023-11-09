<template>
  <div class="main_app">
    <el-input v-model="token" class="token_input" ></el-input>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import chrome from './chrome';
const tokenKey = 'token';
const token = ref('')

const data = chrome.storage.local.get(tokenKey)
if(!!data){
  // token.value = data;
}



</script>

<style>
.main_app {
  width: 200px;
}
.token_input {
  width: 100px;
}
</style>
