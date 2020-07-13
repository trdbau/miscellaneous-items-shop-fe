<template>
  <div class="relative">
    <AppLoading />
    <BaseHeader />
    <Nuxt />
    <BaseFooter />
    <input />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader';
import BaseFooter from './components/BaseFooter';
export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>

<style>
body {
  font-family: 'Mukta', sans-serif, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply min-h-screen;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  line-height: 1.7em;
  @apply transition-all duration-200 z-0;
}
</style>
