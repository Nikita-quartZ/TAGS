import { defineStore } from 'pinia'
import items from '@/assets/items.json'
import materials from '@/assets/materials.json'
import type { State, Filters } from '@/types/System'


export const useSystemStore = defineStore({
  id: 'System',
  state: (): State => ({
    list: [],
    bucket: [],
    likes: [],
    total: items.length,
    materials: materials.map((item) => ({
      ...item,
      id: Number(item.id)
    }))
  }),
  actions: {
    async getCards(filters: Filters[] = []) {
      this.list = items
      
      const sequence = filters.find((item) => item.label === 'Сортировать по:')?.value
      if (sequence === 1) this.list = this.list.sort((a, b) => a.price.current_price - b.price.current_price)
      if (sequence === 2) this.list = this.list.sort((a, b) =>  b.price.current_price - a.price.current_price)
          
      const material = filters.find((item) => item.label === 'Материал')?.value
      if (material) this.list = this.list.filter((item) => item.material === material)

      return this.list;
    },
    async toggleBasket(id: number) {
      const data = localStorage.getItem('bucket')

      if (data) {
        let newData: number[] = JSON.parse(data)
        if (newData.includes(id)) {
          newData = newData.filter((item) => item !== id)
        } else {
          newData.push(id)
        }
        localStorage.setItem('bucket', JSON.stringify(newData))
      } else {
        localStorage.setItem('bucket', JSON.stringify([id]))
      }

      const updateData = localStorage.getItem('bucket')
      if (updateData) this.bucket = JSON.parse(updateData)
    },
    async toggleLike(id: number) {
      const data = localStorage.getItem('likes')

      if (data) {
        let newData: number[] = JSON.parse(data)
        if (newData.includes(id)) {
          newData = newData.filter((item) => item !== id)
        } else {
          newData.push(id)
        }
        localStorage.setItem('likes', JSON.stringify(newData))
      } else {
        localStorage.setItem('likes', JSON.stringify([id]))
      }

      const updateData = localStorage.getItem('likes')
      if (updateData) this.likes = JSON.parse(updateData)
    },
  },
});
