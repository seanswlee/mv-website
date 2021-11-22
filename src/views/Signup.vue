<template>
    <c-signup-form class="illustration-section-02" />
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutSignin.vue'
// import sections
import CSignupForm from '@/components/sections/SignupForm.vue'

export default {
  name: 'Signup',
  components: {
    CSignupForm
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
