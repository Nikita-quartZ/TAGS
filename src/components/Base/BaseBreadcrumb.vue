<script setup lang="ts">
import type { PropType } from 'vue';
import type { BreadcrumbItem } from '@/types/BaseComponents'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  breadcrumb: {
    type: Object as PropType<BreadcrumbItem[]>,
    default() {
      return []
    },
  }
})
</script>

<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__block">
      <li v-for="(item, index) in props.breadcrumb" :key="item.id" class="breadcrumb__item">
        <a
          :class="{'disabled': item.disabled}"
          href="#"
          class="breadcrumb__link"
        >
          {{ item.title }}
        </a>
        <div v-if="index !== props.breadcrumb.length - 1">
          /
        </div>
      </li>
    </ul>
    <div class="breadcrumb__title">
      {{ props.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

.breadcrumb {
  padding-top: 32px;
  margin-bottom: 32px;
}

.breadcrumb__block {
  margin-top: 0;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  list-style: none;
}

.breadcrumb__item {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.breadcrumb__link {
  margin-right: 10px;
  text-decoration: none;
  color: #828282
}

.breadcrumb__title {
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
}

a.disabled {
  color: #000;
  cursor: auto;
}
</style>