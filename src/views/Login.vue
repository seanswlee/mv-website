<template>
    <c-login-form class="illustration-section-02" />
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutSignin.vue'
// import sections
import CLoginForm from '@/components/sections/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    CLoginForm
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>