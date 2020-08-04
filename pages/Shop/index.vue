<template>
  <div class="container px-10 mx-auto">
    <div class="-mx-4 flex">
      <div class="relative w-1/4 mx-4">
        <ShopNavBar class="w-full" />
      </div>

      <div class="w-3/4">
        <ShopFilter />

        <div class="flex flex-wrap">
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

          <div class="w-full mt-4">
            <el-pagination
              background
              class="flex items-center justify-center"
              :current-page.sync="currentPage"
              layout="prev, pager, next"
              :page-size="12"
              small
              :total="500"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SHOPPING_LIST_ITEMS } from '@/seeding';

export default {
  name: 'Shop',
  data: () => ({
    currentPage: 19,
  }),
  created() {
    this.SHOPPING_LIST_ITEMS = SHOPPING_LIST_ITEMS;
  },
  methods: {
    handleCurrentChange(props) {
      console.log(props, 'props'); // eslint-disable-line no-console
    },
  },
};
</script>
