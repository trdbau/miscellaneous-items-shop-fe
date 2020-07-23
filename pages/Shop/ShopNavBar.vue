<template>
  <aside>
    <h2 class="uppercase text-3xl mb-4">
      <strong>
        danh mục
      </strong>
    </h2>

    <div>
      <el-collapse v-model="activeCollapseItem" @change="handleChangeCollapse">
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
  </aside>
</template>

<script>
import { NAV_BAR_LIST_ITEMS } from './constants';
export default {
  name: 'ShopNavBar',
  data() {
    return {
      activeCollapseItem: ['1'],
    };
  },
  created() {
    this.NAV_BAR_LIST_ITEMS = NAV_BAR_LIST_ITEMS;
  },
  methods: {
    handleChangeCollapse(val) {
      console.log(val); // eslint-disable-line
    },
  },
};
</script>
