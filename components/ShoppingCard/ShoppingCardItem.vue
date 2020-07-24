<template>
  <div>
    <nuxt-link :to="`/detail-product/${uuid}`">
      <AspectRatioCard>
        <div class="w-full h-full flex items-center justify-center">
          <img class="object-cover object-center w-full" :src="thumbnail" />
        </div>
      </AspectRatioCard>
      <div class="mt-2">
        <div>
          <div class="font-bold">
            <span>
              {{ currentPrice }}
            </span>

            <span class="text-xs line-through text-gray-700">
              {{ formatCurrency(price) }}
            </span>
          </div>
          <div>
            {{ name }}
          </div>
          <div
            aria-label="Rating of this product is 2.3 out of 5."
            class="Stars"
            style="--rating: 2.3;"
          />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import formatCurrency from '@/helpers/formatCurrency';

export default {
  name: 'ShoppingCardItem',
  props: {
    uuid: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      required: true,
    },
    discountRate: {
      type: Number,
      default: 1,
    },
    thumbnail: {
      type: String,
      default: '',
    },
  },
  computed: {
    currentPrice() {
      return this.formatCurrency(this.price * this.discountRate);
    },
  },
  methods: {
    formatCurrency,
  },
};
</script>

<style lang="scss">
:root {
  --star-background: #fc0;
}

.Stars {
  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: 14px;
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      #fc0 var(--percent),
      black var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
