<template>
  <svgicon :color="color" :height="height" :name="name" :width="width" />
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
      default: 'black',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>
