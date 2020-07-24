<template>
  <div class="container px-20 mx-auto">
    <div class="-mx-4 flex">
      <ShopNavBar class="w-1/4 mx-4" />

      <div class="w-3/4 flex flex-wrap">
        <ShoppingCardItem
          v-for="item in SHOPPING_LIST_ITEMS"
          :key="item._id"
          class="w-1/3 px-4 mb-4"
          :discount-rate="Number(item.discountRate)"
          :name="item.name"
          :price="Number(item.price)"
          :thumbnail="item.thumbnail"
          :uuid="item._id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { SHOPPING_LIST_ITEMS } from '@/seeding';

export default {
  name: 'Shop',
  created() {
    this.SHOPPING_LIST_ITEMS = SHOPPING_LIST_ITEMS;
  },
};
</script>
