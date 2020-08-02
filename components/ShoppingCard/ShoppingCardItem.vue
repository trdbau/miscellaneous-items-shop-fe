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

            <span
              v-if="discountRate !== 1"
              class="text-xs line-through text-gray-700"
            >
              {{ formatCurrency(price) }}
            </span>
          </div>
          <div>
            {{ name }}
          </div>
          <RatingStars />
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
    rating: {
      type: Number,
      default: 5,
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
