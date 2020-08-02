<template>
  <div class="detail-product">
    <Breadcrumb />

    <div class="container">
      <div class="-mx-4 flex flex-wrap">
        <div class="px-4 w-1/2">
          <div class="thumb-example">
            <div>
              slide sản phẩm
            </div>

            <div>
              slide ảnh dành cho sản phẩm
            </div>
          </div>
        </div>

        <div class="px-4 w-1/2">
          <h1 class="uppercase text-2xl leading-6 my-2">
            FAUNA SUPERJANKY BY JULIE WEST
          </h1>

          <div class="uppercase text-xs">
            <span>code:</span>
            <strong>BAUCUTE</strong>
          </div>

          <RatingStars />

          <div class="mt-4 text-3xl font-medium mb-2">
            {{ formatCurrency(123123123) }}
          </div>

          <div class="flex mb-4">
            <span class="mr-4 whitespace-no-wrap">Màu sắc:</span>
            <el-radio-group v-model="style" class="" size="small">
              <el-radio-button
                v-for="item in listColor"
                :key="item"
                border
                class="mr-2"
                :label="item"
                value="item"
              >
                {{ item }}
              </el-radio-button>
            </el-radio-group>
          </div>

          <div class="flex items-center mb-4">
            <span class="mr-2">Số lượng:</span>
            <el-input-number v-model="counter" :max="10" :min="1" size="mini" />
          </div>

          <div class="mb-4">
            <NuxtButton class="h-auto py-3 px-6">
              <div class="flex flex-col items-center tracking-widest">
                <div class="text-sm leading-none mb-2">
                  Mua ngay với giá
                  {{ formatCurrency(123123123 * (counter || 1)) }}
                </div>
                <small class="text-xs leading-none">
                  Đặt mua giao hàng tận nơi
                </small>
              </div>
            </NuxtButton>
          </div>

          <div class="mb-4">
            <div class="flex items-center">
              <NuxtIcon class="mr-2" height="35" name="truck" width="35" />
              <div class="text-xs">
                MIỄN PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG
                <b>TỪ {{ formatCurrency(1000000) }}</b>
              </div>
            </div>
            <div class="flex items-center mt-2">
              <NuxtIcon class="mr-2" height="35" name="quality" width="35" />
              <div class="text-xs">
                CAM KẾT
                <b>100% CHÍNH HÃNG</b>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 w-full mt-6 detail-product__info">
          <el-tabs v-model="tabNameActive">
            <el-tab-pane label="Thông tin sản phẩm" name="first">
              <div class="rte">
                <p>My Home Cats Series By The Fluffy House HongKong</p>
                <p>
                  😸Nói qua sơ về Fluffy House thì đây là 1 brand arttoy đến từ
                  HongKong và những chú mèo này là một trong những "best seller"
                  của hãng.
                </p>
                <p>
                  😸Nếu là một người theo dõi Toyist từ lâu thì chắc hẳn những
                  chú mèo này không còn xa lạ với các bạn khi bọn mình đã mang
                  series 1 về cho các bạn vào khoản thời gian năm ngoái.
                </p>
                <p>
                  😸Năm nay Fluffy House lại tung ra My Home Cats series 2 và
                  Toyist cũng rất may mắn khi mang về được cho các bạn đây.
                </p>
                <p>
                  😸Những chú mèo trong My Home Cats được làm bằng chất liệu nhự
                  PVC, nhẹ nhưng vẫn cứng cáp và lên màu khá là tươi. Về phần
                  thiết kế thì Fluffy House vẫn rất chăm chút cho từng chú mèo
                  của mình khi lên màu khá chi tiết, kể cả phần lòng bàn chân
                  của mèo cũng được thể hiện rỏ :))
                </p>
                <p>
                  😸Và có 1 điều đặc biệt nữa là nếu sen nào lỡ yêu cả bọn mèo
                  này thì có thể mua 1 hộp to 12 blindbox để về mở cho thỏa
                  thích, vì cả 12 hộp đều là 12 thiết kế khác nhau nên các bạn
                  không phải sợ trùng nhé, và biết đâu may mắn các bạn có thể mở
                  được bé mèo secret mà hãng chưa công bố và Toyist vẫn chưa mở
                  được luôn&nbsp;😅
                </p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Giới thiệu" name="second">
              Chưa có thông tin gì thêm
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="px-4 w-full mt-6 detail-product__related-product">
          slide related product
        </div>
      </div>
    </div>
  </div>
</template>

<router>
{
  alias: [ '/detail-product/:slug' ],
  props: true,
}
</router>

<script>
import formatCurrency from '@/helpers/formatCurrency';
import { LIST_IMAGES, LIST_COLOR } from '@/seeding';

export default {
  name: 'DetailProduct',
  data() {
    return {
      tabNameActive: 'first',
      counter: 0,
      style: '',
    };
  },
  computed: {
    slug() {
      return this.$attrs.slug;
    },
    listImages: () => LIST_IMAGES,
    listColor: () => LIST_COLOR,
  },
  watch: {
    // slug: {
    //   handler(slug) {
    //     console.log(slug, 'this.slug'); // eslint-disable-line no-console
    //   },
    //   immediate: true,
    // },
  },
  methods: {
    formatCurrency,
  },
};
</script>

<style lang="scss" scoped>
.detail-product {
  .container {
    @apply px-20 mx-auto;
  }

  &__info {
    @apply text-sm tracking-widest;

    p {
      @apply mb-4;
    }

    img {
      @apply block mx-auto;
    }
  }
}
</style>
