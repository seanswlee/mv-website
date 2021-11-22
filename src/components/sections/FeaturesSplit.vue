<template>
    <section
        class="features-split section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-split-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop',
                        alignTop && 'align-top'
                    ]">
                    <div class="split-item">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                                Get up and running fast
                            </h3>
                            <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div
                            class="split-item-image illustration-element-01 reveal-from-bottom" data-reveal-container=".split-item" data-reveal-delay="200"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image.svg')"
                                class="has-shadow"
                                alt="Features split image 01"
                                :width="528"
                                :height="396" />
                            <div style="position:absolute;bottom:-4.8%;right:-2.27%;">
                                <c-image
                                    :src="require('@/assets/images/features-split-top-01.svg')"
                                    alt="Features split top 01"
                                    :width="528"
                                    :height="396" />
                            </div>
                        </div>
                    </div>

                    <div class="split-item">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16 reveal-from-right" data-reveal-container=".split-item">
                                Get up and running fast
                            </h3>
                            <p class="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div
                            class="split-item-image illustration-element-02 reveal-from-bottom" data-reveal-container=".split-item" data-reveal-delay="200"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image.svg')"
                                class="has-shadow"
                                alt="Features split image 02"
                                :width="528"
                                :height="396" />
                            <div style="position:absolute;top:-5.05%;left:-6.06%;">
                                <c-image
                                    :src="require('@/assets/images/features-split-top-02.svg')"
                                    alt="Features split top 02"
                                    :width="528"
                                    :height="396" />
                            </div>
                        </div>
                    </div>

                    <div class="split-item">
                        <div class="split-item-content center-content-mobile">
                            <h3 class="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                                Get up and running fast
                            </h3>
                            <p class="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div
                            class="split-item-image illustration-element-03 reveal-from-bottom" data-reveal-container=".split-item" data-reveal-delay="200"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image.svg')"
                                class="has-shadow"
                                alt="Features split image 03"
                                :width="528"
                                :height="396" />
                            <div style="position:absolute;bottom:-0.5%;right:-16.67%;">
                                <c-image
                                    :src="require('@/assets/images/features-split-top-03.svg')"
                                    alt="Features split top 03"
                                    :width="528"
                                    :height="396" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesSplit',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      sectionHeader: {
        title: 'The perfect angle, every time.',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
      }
    }
  }
}
</script>