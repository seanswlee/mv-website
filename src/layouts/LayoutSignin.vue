<template>
    <fragment>
        <c-header nav-position="right" hide-nav />
        <main class="site-content">
            <slot />
        </main>
    </fragment>
</template>

<script>
import CHeader from '@/components/layout/Header02.vue'
export default {
  components: {
    CHeader
  }
}
</script>