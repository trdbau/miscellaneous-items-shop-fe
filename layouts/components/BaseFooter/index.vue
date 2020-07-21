<template>
  <footer class="mis-footer mt-8 py-8 bg-gray-100">
    <div class="container px-20 mx-auto">
      <div class="-mx-4 flex">
        <div class="w-1/4 px-4">
          <div class="text-center">
            <nuxt-link
              class="text-xl font-bold px-3 border-solid border-2 border-gray-900 mis-footer__logo"
              to="/"
            >
              M.I.S
            </nuxt-link>
          </div>
          <div class="mt-4 flex">
            <NuxtIcon class="mr-2" name="pin" />
            <span>
              Lô 10 An Thượng 31, Đà Nẵng
            </span>
          </div>
          <div class="mt-4 flex">
            <NuxtIcon class="mr-2" name="phone-call" />
            <a href="tel:0383895522">
              0383895522
            </a>
          </div>
          <div class="mt-4 flex">
            <NuxtIcon class="mr-2" name="pin" />
            <span>
              Lô 10 An Thượng 31, Đà Nẵng
            </span>
          </div>
        </div>
        <div class="w-1/4 px-4 uppercase font-light">
          <div class="my-4">
            <strong class="font-bold">Hỗ trợ</strong>
          </div>
          <div class="mb-2 text-xs">tìm kiếm</div>
          <div class="mb-2 text-xs">đăng ký</div>
          <div class="mb-2 text-xs">đăng nhập</div>
          <div class="mb-2 text-xs">giỏ hàng</div>
        </div>
        <div class="w-1/4 px-4 uppercase font-light">
          <div class="my-4">
            <strong class="font-bold">liên hệ</strong>
          </div>
          <div class="mb-2 text-xs">
            <nuxt-link class="flex items-center" to="/">
              <NuxtIcon
                class="mr-2"
                height="14px"
                name="facebook"
                width="14px"
              />
              Facebook
            </nuxt-link>
          </div>
          <div class="mb-2 text-xs">
            <nuxt-link class="flex items-center" to="/">
              <NuxtIcon
                class="mr-2"
                height="14px"
                name="instagram"
                width="14px"
              />
              Instagram
            </nuxt-link>
          </div>
        </div>
        <div class="w-1/4 px-4 font-light">
          <div class="my-4">
            <strong class="font-bold uppercase">đăng ký liên hệ</strong>
          </div>
          <div class="mb-2 text-xs">
            Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.
          </div>
          <div>
            <el-form
              ref="formData"
              label-width="120px"
              :model="formData"
              :rules="rulesForm"
            >
              <el-form-item prop="newsletter">
                <el-input
                  v-model="formData.newsletter"
                  placeholder="Email của bạn"
                />
              </el-form-item>
              <el-form-item>
                <el-button @click="submitForm">
                  Đăng ký
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  data: () => ({
    formData: {
      newsletter: '',
    },
    rulesForm: {
      clientName: [
        {
          required: true,
          message: 'Hãy nhập E-Mail của bạn!',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Hãy nhập đúng định dạng E-Mail',
          trigger: 'blur',
        },
      ],
    },
  }),
  methods: {
    submitForm() {
      console.log(123); // eslint-disable-line no-console
    },
  },
};
</script>

<style lang="scss" scoped>
.mis {
  &-footer {
    &__logo {
      letter-spacing: 6px;
    }

    strong {
      @apply tracking-widest text-sm;
    }
  }
}
</style>
