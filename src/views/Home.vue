<template>
    <fragment>
        <c-hero-full invert-color class="illustration-section-01" />
        <c-clients top-divider bottom-divider />
        <c-features-tiles />
        <c-features-split invert-mobile image-fill top-divider />
        <c-pricing top-divider pricing-slider />
        <c-cta has-bg-color invert-color split />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import sections
import CHeroFull from '@/components/sections/HeroFull.vue'
import CClients from '@/components/sections/Clients.vue'
import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'
import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'
import CPricing from '@/components/sections/Pricing.vue'
import CCta from '@/components/sections/Cta.vue'

export default {
  name: 'Home',
  components: {
    CHeroFull,
    CClients,
    CFeaturesTiles,
    CFeaturesSplit,
    CPricing,
    CCta
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
