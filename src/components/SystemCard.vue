<script setup lang="ts">
import type { PropType } from 'vue';
import type { Card } from '@/types/System'
import { useSystemStore } from '@/stores/System'

const store = useSystemStore()

const props = defineProps({
  card: {
    type: Object as PropType<Card>,
    default() {
      return []
    },
  }
})

const price = (price: number) => {
  return +price.toFixed(2);
}
</script>

<template>
  <div class="card">
    <div v-if="props.card.price.old_price" class="card__sale">
      Скидка
    </div>
    <div class="card__block-image">
      <img
        class="card__image"
        :src="props.card.image.url"
        alt="picture"
      >
    </div>
    <div class="card__info">
      <p v-if="props.card.code" class="card__code">
        {{ props.card.code }}
      </p>

      <p class="card__name">
        {{ props.card.name }}
      </p>

      <div class="card__footer">
        <p class="card__price">
          <span class="card__old-price" v-if="props.card.price.old_price">
            {{ price(props.card.price.old_price) }}₽
          </span>
          {{ price(props.card.price.current_price) }}₽
        </p>

        <div>
          <button
            @click="store.toggleBasket(Number(props.card.id))"
            class="card__btns"
            type="button"
          >
            <svg
              v-if="!store.bucket.includes(Number(props.card.id))"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.66412 3.80229C5.50428 3.80194 5.3502 3.82003 5.20378 3.85443C5.00307 3.41204 4.73794 3.01515 4.4364 2.7136C3.92459 2.2018 3.1174 2 2 2V3.8C2.6826 3.8 3.07541 3.8982 3.1636 3.9864C3.50378 4.32657 3.8 5.01776 3.8 5.6L3.80905 5.72728L4.69093 11.9005C3.21532 11.977 2.07218 13.1229 2.00111 14.5554L2 15.5C2.08714 16.9795 3.22648 18.1177 4.64892 18.1985L4.85323 18.1989C5.22356 19.2481 6.22398 20 7.4 20C8.5756 20 9.57571 19.2487 9.94636 18.2H12.0536C12.4243 19.2487 13.4244 20 14.6 20C16.0912 20 17.3 18.7912 17.3 17.3C17.3 15.8088 16.0912 14.6 14.6 14.6C13.4244 14.6 12.4243 15.3513 12.0536 16.4H9.94636C9.57571 15.3513 8.5756 14.6 7.4 14.6C6.2244 14.6 5.22429 15.3513 4.85364 16.4H4.7C4.24101 16.3725 3.82928 15.9612 3.79838 15.4461L3.8 14.6C3.82427 14.1332 4.23318 13.7243 4.7446 13.6989L6.52132 13.6993L6.5342 13.7H15.6052L15.738 13.6578C16.4204 13.4413 16.9667 12.9275 17.2253 12.2623L17.3201 12.0746L17.6282 11.4643C17.9469 10.8325 18.2656 10.1997 18.5762 9.58142C19.3369 8.06697 19.8153 7.1045 19.9213 6.86815C20.4654 5.65441 19.3632 4.72022 18.2366 4.70032L5.66412 3.80229ZM15.2924 11.9H6.60154C6.54375 11.8839 6.49972 11.835 6.4911 11.774L5.60919 5.60063L18.104 6.4954C17.8854 6.94126 17.4879 7.73762 16.9676 8.77345L16.9546 8.79941C16.6576 9.39065 16.3393 10.0226 16.0211 10.6535L15.7134 11.2631L15.5968 11.4939L15.5529 11.596C15.5058 11.727 15.4125 11.8346 15.2924 11.9ZM14.6 18.1999C15.097 18.1999 15.5 17.797 15.5 17.2999C15.5 16.8029 15.097 16.3999 14.6 16.3999C14.1029 16.3999 13.7 16.8029 13.7 17.2999C13.7 17.797 14.1029 18.1999 14.6 18.1999ZM8.3 17.2999C8.3 17.797 7.89706 18.1999 7.4 18.1999C6.90294 18.1999 6.5 17.797 6.5 17.2999C6.5 16.8029 6.90294 16.3999 7.4 16.3999C7.89706 16.3999 8.3 16.8029 8.3 17.2999Z"
                fill="black"
              />
            </svg>
            <svg
              v-else
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 20.8999C5.53235 20.8999 1.09997 16.4676 1.09997 10.9999C1.09997 5.53233 5.53235 1.09995 11 1.09995C16.4676 1.09995 20.9 5.53233 20.9 10.9999C20.9 16.4676 16.4676 20.8999 11 20.8999ZM11 19.0999C15.4735 19.0999 19.1 15.4734 19.1 10.9999C19.1 6.52644 15.4735 2.89994 11 2.89994C6.52646 2.89994 2.89997 6.52644 2.89997 10.9999C2.89997 15.4734 6.52646 19.0999 11 19.0999ZM13.9636 7.66355L9.19997 12.4272L7.13637 10.3636L5.86358 11.6363L9.19997 14.9727L15.2364 8.93635L13.9636 7.66355Z"
                fill="#27AE60"
              />
            </svg>
          </button>

          <button
            @click="store.toggleLike(Number(props.card.id))"
            class="card__btns"
            type="button"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                :class="{'heart-active': store.likes.includes(Number(props.card.id))}"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0979 2.00001C13.795 2 12.9551 2.15522 11.9924 2.62647C11.6359 2.80094 11.3015 3.01105 10.9909 3.25618C10.6923 3.0248 10.3713 2.82433 10.0296 2.65532C9.04816 2.1699 8.16523 2 6.90907 2C3.54477 2 1.09998 4.78754 1.09998 8.40789C1.09998 11.142 2.62442 13.7831 5.46393 16.3369C6.95438 17.6774 8.85737 19.004 10.2202 19.7097L11 20.1135L11.7797 19.7097C13.1426 19.004 15.0456 17.6774 16.536 16.3369C19.3755 13.7831 20.9 11.142 20.9 8.40789C20.9 4.82586 18.4321 2.01382 15.0979 2.00001ZM19.1 8.40793C19.1 10.5499 17.8276 12.7544 15.3324 14.9986C13.972 16.2221 12.2231 17.4449 11 18.0864C9.77695 17.4449 8.02806 16.2221 6.66767 14.9986C4.17246 12.7544 2.90002 10.5499 2.90002 8.40793C2.90002 5.73298 4.5953 3.80004 6.90911 3.80004C7.90787 3.80004 8.52333 3.91847 9.23164 4.2688C9.65002 4.47573 10.0198 4.74897 10.3399 5.09043L11.0021 5.79687L11.6583 5.08483C11.9856 4.72969 12.3608 4.45023 12.7837 4.24322C13.4713 3.90668 14.0483 3.80004 15.0942 3.80004C17.3794 3.80952 19.1 5.7701 19.1 8.40793Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid #EEEEEE;
  position: relative;
}

.card__sale {
  height: 24px;
  width: 81px;
  background-color: #EB5757;
  color: #fff;
  line-height: 24px;
  text-align: center;
  position: absolute;
  top: 8px;
  left: 0;
}

.card__image {
  max-width: 238px;
  width: 100%;
}

.card__block-image {
  display: flex;
  justify-content: center;
  margin-bottom: 106px;
}

.card__info {
  padding: 0 12px;
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
}

.card__code {
  font-size: 10px;
  margin-bottom: 6px;
  line-height: 14px;
  color: #888888;
}

.card__name {
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card__old-price {
  text-decoration: line-through;
  color: #888888;
  margin-right: 9px;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__btns {
  padding: 0;
  border: none;
  background: none;
  padding: 7px;
  cursor: pointer;
}

.card__btns:not(:last-child) {
  margin-right: 11px;
}

.heart-active {
  fill: red;
}
</style>