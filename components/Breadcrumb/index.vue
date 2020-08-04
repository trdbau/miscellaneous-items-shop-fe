<template>
  <div class="breadcrumb">
    <el-breadcrumb class="container" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        home
      </el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{ path: '/shop', query: { collection: 'quần áo' } }"
      >
        promotion management
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        promotion list
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        promotion detail
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
};
</script>

<style lang="scss">
$breadcrumb: '.el-breadcrumb';

.breadcrumb {
  @apply h-12 uppercase flex items-center mb-6 border-t border-b border-gray-300;

  #{$breadcrumb} {
    @apply mx-auto px-10;

    &__item {
      @apply flex items-center;
    }

    &__inner {
      @apply uppercase font-normal text-black text-opacity-75 #{!important};

      &:hover.is-link {
        @apply text-opacity-100 text-black #{!important};
      }
    }
  }
}
</style>
