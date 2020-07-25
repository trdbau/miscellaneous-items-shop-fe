<template>
  <div class="mx-4 mb-2 flex items-center h-10">
    <span class="mr-4">Sắp xếp theo:</span>
    <el-radio-group v-model="radio">
      <el-radio
        v-for="item in listSortBy"
        :key="item.label"
        :label="item.label"
        value="item.label"
        @click.native.prevent="checkValue(item)"
      >
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import { SORT_BY_LIST } from '@/seeding';

export default {
  name: 'ShopFilter',
  data: () => ({
    radio: '',
  }),
  computed: {
    listSortBy: () => SORT_BY_LIST,
  },
  methods: {
    checkValue(item) {
      if (item.label === this.radio) {
        this.radio = '';
      } else {
        this.radio = item.label;
      }
    },
  },
};
</script>
