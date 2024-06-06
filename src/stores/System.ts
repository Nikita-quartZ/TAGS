import { defineStore } from 'pinia'
import items from '@/assets/items.json'
import materials from '@/assets/materials.json'

interface Card {
  id: string,
  name: string,
  code: string | null,
  price: {
    old_price: number | null,
    current_price: number,
  },
  image: {
    url: string
  },
  material: number
}

interface Material {
  id: number,
  name: string
}

interface Filters {
  label: string,
  value: number | null
}

interface State {
  list: Card[],
  total: number,
  materials: Material[]
}

export const useSystemStore = defineStore({
  id: 'System',
  state: (): State => ({
    list: [],
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
    // async toggleBasket(id: number) {
    //   const data = localStorage.getItem('bucket')
    //   if (data) {
    //     const newData: number[] = JSON.parse(data)
    //     if (newData.includes(id)) {
    //       newData.filter((item) => item !== id)
    //     } else {
    //       newData
    //     }
    //   } else {
    //     localStorage.setItem('bucket', JSON.stringify(id))
    //   }
      
    // },
  },
});
