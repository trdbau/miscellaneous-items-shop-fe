<template>
  <router-link
    v-if="link"
    :class="`mis-btn mis-btn--${type}`"
    :to="link"
    @click.native="handleClick"
  >
    <span class="mis-btn__inner">
      <slot />
    </span>
  </router-link>
  <button
    v-else
    :class="`mis-btn mis-btn--${type}`"
    :disabled="disabled"
    type="button"
    @click.prevent="handleClick"
  >
    <span class="mis-btn__inner">
      <slot />
    </span>
  </button>
</template>

<script>
import debounce from '@/helpers/debounce';

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'outline-black',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick: debounce(function () {
      this.$emit('click');
    }),
  },
};
</script>

<style lang="scss" scoped>
.mis-btn {
  @apply h-10 cursor-pointer border border-transparent rounded-sm bg-white px-4 inline-block;

  &__inner {
    @apply flex items-center justify-center h-full;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    @apply bg-gray-400 border-gray-400 text-white cursor-not-allowed;
  }

  &--outline-black {
    fill: theme('colors.black');
    @apply bg-white text-black border-black duration-300;

    &:hover {
      fill: theme('colors.white');
      @apply bg-black text-white;
    }
  }

  .svg-icon {
    @apply duration-300 mr-1;
  }
}
</style>
