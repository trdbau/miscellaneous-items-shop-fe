<template>
  <router-link
    v-if="link"
    :class="`mis-btn mis-btn--${size} mis-btn--${type}`"
    :to="link"
    @click.native="handleClick"
  >
    <span class="mis-btn__inner">
      <slot />
    </span>
  </router-link>
  <button
    v-else
    :class="`mis-btn mis-btn--${size} mis-btn--${type}`"
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
      default: 'primary',
    },
    size: {
      type: Number,
      default: 128,
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

<style lang="scss">
.mis-btn {
  @apply h-10 cursor-pointer text-center border border-transparent rounded-sm bg-white px-4;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    @apply bg-gray-400 border-gray-400 text-white cursor-not-allowed;
  }

  &--primary {
    fill: theme('colors.white');
    @apply bg-black text-white;
  }

  .svg-icon {
    transition: all ease 0.3s;
    @apply duration-300 mr-1;
  }
}
</style>
