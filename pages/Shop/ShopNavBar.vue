<template>
  <aside class="sticky-aside">
    <h2 class="uppercase text-2xl mb-2">
      <strong>
        danh mục
      </strong>
    </h2>

    <div>
      <el-collapse
        v-model="activeCollapseItem"
        class="ml-2"
        @change="handleChangeCollapse"
      >
        <template v-for="item in NAV_BAR_LIST_ITEMS">
          <el-collapse-item
            v-if="item.children && item.children.length"
            :key="item.title"
            :name="item.query"
          >
            <template slot="title">
              {{ item.title }}
            </template>
            <div
              v-for="child in item.children"
              :key="child.title"
              class="h-6 flex items-center pl-3"
            >
              {{ child.title }}
            </div>
          </el-collapse-item>
          <div
            v-else
            :key="item.title"
            class="h-10 text-sm flex items-center font-medium"
          >
            {{ item.title }}
          </div>
        </template>
      </el-collapse>
    </div>

    <h2 class="uppercase text-2xl mb-2">
      <strong>
        Theo giá tiền
      </strong>
    </h2>

    <div>
      <el-checkbox-group v-model="toPrice" class="ml-2">
        <el-checkbox
          v-for="costRange in COST_RANGE_SELECT"
          :key="costRange.label"
          :label="costRange.label"
        >
          <div class="h-10 flex items-center ml-2">
            {{ costRange.label }}
          </div>
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </aside>
</template>

<script>
import { CATEGORIES, COST_RANGE_SELECT } from '@/seeding';
export default {
  name: 'ShopNavBar',
  data() {
    return {
      activeCollapseItem: ['1'],
      toPrice: [],
    };
  },
  created() {
    this.NAV_BAR_LIST_ITEMS = CATEGORIES;
    this.COST_RANGE_SELECT = COST_RANGE_SELECT;
  },
  methods: {
    handleChangeCollapse(val) {
      console.log(val); // eslint-disable-line
    },
  },
};
</script>

<style lang="scss" scoped>
.sticky-aside {
  top: 80px;
  @apply sticky;
}
</style>
