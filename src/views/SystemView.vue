<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useSystemStore } from '@/stores/System'
import type { Filter } from '@/types/System'
import SystemFilter from '@/components/SystemFilter.vue'
import SystemCard from '@/components/SystemCard.vue'

const store = useSystemStore()

const filteredMaterials = store.materials.map((item) => ({
  label: item.name,
  code: item.id,
}))

const filters = ref<Filter[]>([
  {
    label: 'Сортировать по:',
    options: [
      {
        label: 'Цена по возрастанию',
        code: 1,
      },
      {
        label: 'Цена по убыванию',
        code: 2,
      },
    ],
    value: null,
  },
  {
    label: 'Материал',
    options: filteredMaterials,
    value: null,
  },
])

const filterData = computed(() => filters.value.map((item) => ({
  label: item.label,
  value: item.value,
})))

watch(filterData, (newValue) => {
  store.getCards(newValue)
})

store.getCards()

const updateBucket = localStorage.getItem('bucket')
if (updateBucket) store.bucket = JSON.parse(updateBucket)
const updateLikes = localStorage.getItem('likes')
if (updateLikes) store.likes = JSON.parse(updateLikes)
</script>

<template>
  <div class="system">
    <SystemFilter class="system__filter" v-model="filters"/>
    <div class="system__cards">
      <SystemCard :card="card" v-for="card in store.list" :key="card.id"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.system__filter {
  margin-bottom: 41px;
}

.system__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 48px;
  margin-bottom: 41px;
}

@media (max-width: 1200px) {
  .system__cards {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
}

@media (max-width: 768px) {
  .system__cards {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
}

@media (max-width: 576px) {
  .system__cards {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
  }
}
</style>
