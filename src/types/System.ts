export interface Option {
  label: string,
  code: number,
}

export interface Filter {
  label: string,
  value: number | null
  options: Option[]
}

export interface Card {
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

export interface Material {
  id: number,
  name: string
}

export interface Filters {
  label: string,
  value: number | null
}

export interface State {
  list: Card[],
  bucket: number[],
  likes: number[],
  total: number,
  materials: Material[]
}