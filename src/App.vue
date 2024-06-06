<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseBreadcrumb from '@/components/Base/BaseBreadcrumb.vue'


const title =  'Комплекты стеллажных систем'
const breadcrumb = [
  {
    title: 'Главная',
    id: 1,
    disabled: false,
  },
  {
    title: 'Системы хранения',
    id: 2,
    disabled: false,
  },
  {
    title: 'Комплекты стеллажных систем',
    id: 3,
    disabled: true,
  },
]
</script>

<template>
  <div class="container">
    <header>
      <BaseBreadcrumb :title="title" :breadcrumb="breadcrumb"/>
    </header>
  
    <RouterView />
  </div>
</template>
