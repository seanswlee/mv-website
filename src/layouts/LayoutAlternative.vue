<template>
    <fragment>
        <c-header nav-position="right" class="invert-color" />
        <main class="site-content">
            <slot />
        </main>
        <c-footer />
    </fragment>
</template>

<script>
import CHeader from '@/components/layout/Header.vue'
import CFooter from '@/components/layout/Footer02.vue'
export default {
  components: {
    CHeader,
    CFooter
  }
}
</script>