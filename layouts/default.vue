<template>
  <div class="relative min-h-screen flex flex-col">
    <AppLoading />
    <BaseHeader />
    <Nuxt class="flex-1" />
    <BaseFooter />
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
