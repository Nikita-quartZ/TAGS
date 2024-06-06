<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Option, Filter } from '@/types/System'

const emit = defineEmits(['update:modelValue', 'update'])

const props = defineProps({
  modelValue: {
    type: Object as PropType<Filter[]>,
    default() {
      return []
    },
  }
})

const filters = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

</script>

<template>
  <div class="system__filters">
    <div
      v-for="filter in filters"
      :key="filter.label"
      class="system__filter-block"
    >
      <p class="system__filters-title">
        {{ filter.label }}
      </p>
      <v-select
        v-model="filter.value"
        :reduce="(label: Option) => label.code"
        value="code"
        :options="filter.options"
        class="system__filters-select"
        :placeholder="filter.label"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.system__filters {
  display: flex;
}

.system__filters-title {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  padding-left: 16px;
  margin-bottom: 6px;
  color: #4F4F4F;
}

.system__filter-block {
  max-width: 288px;
  width: 100%;
}

.system__filter-block:not(:last-child) {
  margin-right: 24px;
}
</style>