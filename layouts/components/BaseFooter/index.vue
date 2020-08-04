<template>
  <footer class="mis-footer mt-8 py-8 bg-gray-100">
    <div class="container px-10 mx-auto">
      <div class="-mx-4 flex text-xs">
        <div class="w-1/4 px-4">
          <div class="text-center">
            <nuxt-link class="mis-footer__logo" to="/">
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
            <NuxtIcon class="mr-2" name="email" />
            <a href="tel:0383895522">
              trdbau@gmail.com
            </a>
          </div>
        </div>
        <div class="w-1/4 px-4 uppercase font-light">
          <div class="my-4">
            <strong class="font-bold">Hỗ trợ</strong>
          </div>
          <div class="mb-2">tìm kiếm</div>
          <div class="mb-2">đăng ký</div>
          <div class="mb-2">đăng nhập</div>
          <div class="mb-2">giỏ hàng</div>
        </div>
        <div class="w-1/4 px-4 uppercase font-light">
          <div class="my-4">
            <strong class="font-bold">liên hệ</strong>
          </div>
          <div class="mb-2">
            <nuxt-link class="inline-flex items-center" to="/">
              <NuxtIcon
                class="mr-2"
                height="14px"
                name="facebook"
                width="14px"
              />
              Facebook
            </nuxt-link>
          </div>
          <div class="mb-2">
            <nuxt-link class="inline-flex items-center" to="/">
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
          <div class="mb-2">
            Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.
          </div>
          <div>
            <el-form ref="formData" :model="formData" :rules="rulesForm">
              <el-form-item
                class="mb-2"
                :inline-message="true"
                prop="newsletter"
              >
                <el-input
                  v-model="formData.newsletter"
                  placeholder="Email của bạn"
                />
              </el-form-item>
              <el-form-item>
                <NuxtButton class="w-full" @click="submitForm">
                  Đăng ký
                </NuxtButton>
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
  data() {
    return {
      timeOut: null,
      isSubmitBtnClicked: false,
      formData: {
        newsletter: '',
      },
      rulesForm: {
        newsletter: [
          {
            validator: this.validateOnFocusing,
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Hãy nhập đúng định dạng E-Mail',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    validateOnFocusing(rule, value, callback) {
      if (this.isSubmitBtnClicked && !value.length) {
        callback(new Error('Hãy nhập E-Mail của bạn'));
      } else {
        callback();
      }
    },
    turnRequireOn() {
      clearTimeout(this.timeOut);
      this.isSubmitBtnClicked = true;
      this.timeOut = setTimeout(() => {
        this.turnRequireOff();
      }, 2000);
    },
    turnRequireOff() {
      this.timeOut = null;
      this.isSubmitBtnClicked = false;
      this.$refs.formData.validate();
    },
    submitForm() {
      this.turnRequireOn();

      this.$refs.formData.validate(async valid => {
        if (!valid) {
          return false;
        }

        alert('Chúng tôi sẽ thông báo!'); // eslint-disable-line
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mis {
  &-footer {
    &__logo {
      letter-spacing: 6px;
      @apply text-xl font-bold px-3 border-solid border-2 border-gray-900 inline-block;
    }

    strong {
      @apply tracking-widest text-sm;
    }
  }
}
</style>
