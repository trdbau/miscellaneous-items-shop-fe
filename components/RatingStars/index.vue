<template>
  <div
    aria-label="Rating of this product is 2.3 out of 5."
    class="Stars"
    :style="{ '--rating': rating }"
  />
</template>

<script>
export default {
  name: 'RatingStars',
  props: {
    rating: {
      type: Number,
      default: 5,
    },
  },
};
</script>

<style lang="scss">
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
