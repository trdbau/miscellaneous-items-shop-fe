<template>
  <div>
    <header class="bg-orange-100">
      <div
        class="container h-full mx-auto flex flex-col lg:flex-row-reverse px-20"
      >
        <div class="lg:w-1/2 pt-64">
          <div class="text-center">
            <div class="tracking-widest text-sm">
              #NEW SUMMER COLLECTION 2020
            </div>
            <h1 class="text-6xl font-bold mb-6">ARRIVALS SALES</h1>
            <router-link
              to="/shop"
              class="uppercase px-8 py-3 bg-black text-white text-sm"
            >
              shop now
            </router-link>
          </div>
        </div>
        <div class="lg:w-1/2 h-full">
          <img
            src="/images/model_3.png"
            class="object-cover object-top w-full h-full"
          />
        </div>
      </div>
    </header>
    <div class="h-screen">Home Page</div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  height: calc(100vh - 174px);

  .tracking-widest {
    letter-spacing: 3px;
  }
}
</style>
