<template>
  <div class="relative">
    <AppLoading />
    <BaseHeader />
    <Nuxt />
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
