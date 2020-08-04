<template>
  <div class="mis-home relative z-0">
    <header class="bg-orange-100">
      <div
        class="container h-full mx-auto flex flex-col lg:flex-row-reverse px-10"
      >
        <div class="lg:w-1/2 pt-64">
          <div class="text-center">
            <div class="tracking-widest text-sm">
              #NEW SUMMER COLLECTION 2020
            </div>
            <h1 class="text-6xl font-bold mb-4">ARRIVALS SALES</h1>
            <NuxtButton class="uppercase px-8 py-3 h-auto" link="/shop">
              shop now
            </NuxtButton>
          </div>
        </div>
        <div class="lg:w-1/2 h-full">
          <img
            class="object-cover object-top w-full h-full"
            src="/images/model_3.png"
          />
        </div>
      </div>
    </header>

    <div class="mis-home__collections pt-20">
      <div class="container px-10 mx-auto">
        <div class="border-l-4 border-red-600 pl-8 text-3xl">
          <h2 class="leading-tight">DISCOVER</h2>
          <h2 class="leading-tight">THE COLLECTIONS</h2>
        </div>
        <div class="flex mt-12 overflow-hidden -mx-4">
          <div class="w-2/3 px-4">
            <AspectRatioCard>
              <div
                class="w-full h-full bg-gray-100 flex items-end justify-center relative"
              >
                <img
                  class="object-cover object-top"
                  src="/images/model_4.png"
                />
                <NuxtButton
                  class="absolute px-6 py-3 h-auto border-none rounded-none"
                  link="/shop?keywords=women"
                >
                  <span>Women</span>
                  <span class="text-sm text-gray-500 ml-1">25 items</span>
                </NuxtButton>
              </div>
            </AspectRatioCard>
          </div>
          <div class="w-1/3 px-4">
            <AspectRatioCard>
              <div
                class="w-full h-full bg-gray-100 flex justify-center relative pt-10"
              >
                <img
                  class="object-cover object-top"
                  src="/images/model_5.png"
                />
                <NuxtButton
                  class="absolute px-6 py-3 h-auto border-none rounded-none"
                  link="/shop?keywords=women"
                >
                  <span>Men</span>
                  <span class="text-sm text-gray-500 ml-1">25 items</span>
                </NuxtButton>
              </div>
            </AspectRatioCard>
            <AspectRatioCard class="mt-8">
              <div
                class="w-full h-full bg-gray-100 flex justify-center relative pt-10"
              >
                <img
                  class="object-cover object-top"
                  src="/images/model_6.png"
                />
                <NuxtButton
                  class="absolute px-6 py-3 h-auto border-none rounded-none"
                  link="/shop?keywords=shoes"
                >
                  <span>Shoes</span>
                  <span class="text-sm text-gray-500 ml-1">25 items</span>
                </NuxtButton>
              </div>
            </AspectRatioCard>
          </div>
        </div>
      </div>
    </div>

    <div class="mis-home__popular pt-20">
      <div class="container px-10 mx-auto">
        <div class="border-l-4 border-red-600 pl-8 text-3xl">
          <h2 class="leading-tight">POPULAR PRODUCTS</h2>
        </div>
        <div class="flex mt-12 flex-wrap -mx-4">
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
  </div>
</template>

<script>
import { SHOPPING_LIST_ITEMS } from '@/seeding';

export default {
  name: '',
  props: {},
  data() {
    return {
      SHOPPING_LIST_ITEMS,
    };
  },
};
</script>

<style lang="scss" scoped>
.mis-home {
  $mis: '.mis-home';

  header {
    height: calc(100vh - 174px);

    .tracking-widest {
      letter-spacing: 3px;
    }
  }

  #{$mis}__collections {
    img {
      max-width: 300px;
    }

    a {
      top: 50%;

      &:hover {
        .text-sm {
          @apply text-white opacity-50;
        }
      }
    }
  }
}
</style>
