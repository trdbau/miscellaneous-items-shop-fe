<template>
  <div class="page-404 container">
    <h2>Are you losting?</h2>
    <h2>Need a way out?</h2>
    <div class="flex justify-between">
      <NuxtButton link="/shop">
        Looking for other goods
      </NuxtButton>

      <NuxtButton link="/">
        Just HOME
      </NuxtButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
};
</script>

<style lang="scss" scoped>
.page-404 {
  @apply flex flex-col items-center justify-center mx-auto;

  h2 {
    @apply text-3xl mb-2;
  }

  .mis-btn {
    @apply mx-2;
  }
}
</style>
