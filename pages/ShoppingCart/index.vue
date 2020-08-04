<template>
  <div class="shopping-cart">
    <Breadcrumb />

    <div class="container mx-auto px-10">
      <div class="-mx-4 flex flex-wrap items-start">
        <h2
          class="text-3xl w-full tracking-widest font-light uppercase px-4 mb-6"
        >
          Giỏ hàng
          <span class="text-base">
            (2 sản phẩm)
          </span>
        </h2>

        <div class="shopping-cart__list">
          <div
            v-for="item in SHOPPING_LIST_ITEMS"
            :key="item._id"
            class="shopping-cart__item"
          >
            <div class="w-1/4">
              <AspectRatioCard>
                <div class="w-full h-full flex items-center justify-center">
                  <img
                    class="object-cover object-center w-full"
                    src="https://picsum.photos/200/300"
                  />
                </div>
              </AspectRatioCard>
            </div>
            <div class="w-3/4 flex items-center pl-4">
              <div class="flex-1">
                <nuxt-link to="/">
                  POPMART X DISNEY TOY STORY 4 - Blindbox
                </nuxt-link>
                <NuxtButton
                  class="block h-auto hover:text-red-500 text-sm px-0 mt-1"
                  type="text-black"
                >
                  Xoá
                </NuxtButton>
              </div>
              <span class="text-blue-500 mx-4">
                {{ formatCurrency(123123123) }}
              </span>
              <div>
                <el-input-number
                  v-model="counter"
                  :max="10"
                  :min="1"
                  size="mini"
                />
              </div>
            </div>
          </div>
        </div>

        <aside>
          <div class="flex justify-between flex-wrap font-bold items-baseline">
            <span class="text-sm">Tạm tính:</span>
            <span class="text-sm">
              {{ formatCurrency(123123123) }}
            </span>
            <div class="border-b my-4 w-full" />
            <span class="text-sm">Thành tiền:</span>
            <span class="text-xl text-blue-400">
              {{ formatCurrency(740000) }}
            </span>
            <NuxtButton
              class="uppercase font-light text-xl h-12 tracking-widest w-full mt-10 mb-4"
            >
              Thanh toán ngay
            </NuxtButton>
            <NuxtButton
              class="uppercase font-light text-xl h-12 tracking-widest w-full"
              to="/shopping"
              type="bg-black"
            >
              tiếp tục mua sắm
            </NuxtButton>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<router>
{
  alias: [ '/shopping-cart' ],
}
</router>

<script>
import formatCurrency from '@/helpers/formatCurrency';
import { SHOPPING_LIST_ITEMS } from '@/seeding';

export default {
  name: 'ShoppingCart',
  data: () => ({
    counter: 0,
    SHOPPING_LIST_ITEMS,
  }),
  methods: {
    formatCurrency,
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  &__list {
    @apply w-3/4 px-4;
  }

  &__item {
    @apply flex py-4;

    &:not(:last-child) {
      @apply border-b;
    }
  }

  aside {
    top: 110px;
    @apply w-1/4 px-4 sticky h-auto;
  }
}
</style>
