<template>
  <div class="container">
    <GlobalHeader :user="state.user"></GlobalHeader>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from '@/components/GlobalHeader.vue'
import { reactive } from 'vue'
const state = reactive({
  user: {
    isLogin: false,
    name: 'ollie',
  },
})
</script>
