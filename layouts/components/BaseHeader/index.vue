<template>
  <nav
    :class="{
      'h-20 bg-white top-0 left-0 mis-navbar sticky z-10': true,
      shadow: !isAtTop,
    }"
  >
    <div
      class="container px-10 mx-auto flex items-center justify-between h-full"
    >
      <nuxt-link
        class="text-xl font-bold px-3 border-solid border-2 border-gray-900 mis-navbar__logo"
        to="/"
      >
        M.I.S
      </nuxt-link>

      <div class="mis-navbar__nav-links flex items-center h-full">
        <div
          v-for="(route, indexOfRoute) in ROUTES"
          :key="`route_${indexOfRoute}`"
          :class="{
            'h-full flex items-center': true,
            'relative has-children': route.children,
          }"
        >
          <nuxt-link class="px-4" :to="route.value">
            {{ route.label }}
          </nuxt-link>

          <ul
            v-if="route.children"
            class="absolute left-0 bg-white border-t-2 border-red-500 -mt-4"
          >
            <li
              v-for="(item, indexOfChild) in route.children"
              :key="`child_${indexOfChild}`"
            >
              <nuxt-link
                class="py-3 px-5 hover:bg-gray-200 w-40 block font-light text-gray-700 hover:text-black"
                :to="{ path: '/shop', query: { collection: item.label } }"
              >
                {{ item.label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex">
        <NuxtIcon class="px-2" name="search" width="36" />

        <nuxt-link
          v-for="(icon, index) in UNAUTH_ICON_LIST"
          :key="`icon_${index}`"
          class="px-2"
          :to="`/${icon.path}`"
        >
          <NuxtIcon :name="icon.iconName" />
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ROUTES, UNAUTH_ICON_LIST } from '@/seeding';

export default {
  name: 'BaseHeader',
  props: {},
  data() {
    return {
      ROUTES,
      UNAUTH_ICON_LIST,
      isAtTop: true,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const { scrollY } = window;
      if (scrollY > 0) {
        this.isAtTop = false;
      } else {
        this.isAtTop = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mis {
  &-navbar {
    &__logo {
      letter-spacing: 6px;
    }

    &__nav-links {
      .has-children {
        ul {
          top: 100%;
          z-index: -10;
          @apply invisible opacity-0 duration-300;
        }

        &:hover {
          ul {
            @apply visible opacity-100 shadow z-20;
          }
        }
      }
    }
  }
}
</style>
