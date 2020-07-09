<template>
  <svgicon :name="name" :width="width" :color="color" :height="height" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '20px',
    },
    height: {
      type: String,
      default: '20px',
    },
    color: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>
