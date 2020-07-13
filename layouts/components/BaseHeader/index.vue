<template>
  <nav
    :class="{
      'h-20 bg-white top-0 left-0 w-screen mis-navbar sticky z-50': true,
      shadow: !isAtTop,
    }"
  >
    <div
      class="container px-20 mx-auto flex items-center justify-between h-full"
    >
      <router-link
        class="text-xl font-bold px-3 border-solid border-2 border-gray-900 mis-navbar__logo"
        to="/"
      >
        M.I.S
      </router-link>

      <div class="mis-navbar__nav-links flex items-center h-full">
        <div
          v-for="(route, indexOfRoute) in constants.ROUTES"
          :key="`route_${indexOfRoute}`"
          :class="{
            'px-4 h-full flex items-center': true,
            'relative has-children': route.children,
          }"
        >
          <router-link :to="route.label" class="relative">
            {{ route.label }}
          </router-link>

          <ul
            v-if="route.children"
            class="absolute left-0 bg-white border-t-2 border-red-500 -mt-4"
          >
            <li
              v-for="(item, indexOfChild) in route.children"
              :key="`child_${indexOfChild}`"
            >
              <router-link
                :to="item.label"
                class="py-3 px-5 hover:bg-gray-200 w-40 block font-light text-gray-700 hover:text-black"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex">
        <router-link
          v-for="(icon, index) in constants.UNAUTH_ICON_LIST"
          :key="`icon_${index}`"
          :to="`/${icon.path}`"
          class="px-2"
        >
          <NuxtIcon :name="icon.iconName" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import constants from './constants';

export default {
  name: 'BaseHeader',
  props: {},
  data() {
    return {
      constants,
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
          @apply invisible opacity-0;
        }

        &:hover {
          ul {
            @apply visible opacity-100 shadow;
          }
        }
      }
    }
  }
}
</style>
