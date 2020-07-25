<template>
  <div class="aspect-ratio-card" :style="ratioStyle">
    <div
      class="absolute left-0 top-0 w-full h-full flex items-center justify-center"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AspectRatioCard',
  props: {
    // [???] x
    horizontal: {
      type: Number,
      default: 1,
    },
    // [???] y
    vertical: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ratioStyle() {
      // [???] ratio = y/x = v/h
      return { 'padding-top': `${(this.vertical / this.horizontal) * 100}%` };
    },
  },
};
</script>

<style lang="scss" scoped>
.aspect-ratio-card {
  @apply relative w-full overflow-hidden;
}
</style>
