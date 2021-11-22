<template>
    <section
        class="cta section center-content-mobile"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="cta-inner section-inner reveal-from-bottom"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider',
                    split && 'cta-split'
                ]">
                <div class="cta-slogan">
                    <h3 class="m-0">
                        For previewing layouts and visual?
                    </h3>
                </div>
                <div class="cta-action">
                    <c-button tag="a" color="primary" wide-mobile href="#">
                        Get started now
                    </c-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CButton from '@/components/elements/Button.vue'

export default {
  name: 'CCta',
  components: {
    CButton
  },
  mixins: [SectionProps],
  props: {
    split: {
      type: Boolean,
      default: false
    }
  }
}
</script>