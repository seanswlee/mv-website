<template>
    <section
        class="testimonial section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="testimonial-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="tiles-wrap has-bg-color"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                        <div class="tiles-item-inner has-shadow">
                            <div class="testimonial-item-header mb-24">
                                <div class="testimonial-item-image">
                                    <c-image
                                        :src="require('@/assets/images/testimonial-image-01.jpg')"
                                        alt="Testimonial image 01"
                                        :width="48"
                                        :height="48" />
                                </div>
                            </div>
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div class="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name">
                                    Adriana Carlson
                                </span>
                                <span> - </span>
                                <span class="testimonial-item-link">
                                    <a href="#">AppName</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
                        <div class="tiles-item-inner has-shadow">
                            <div class="testimonial-item-header mb-24">
                                <div class="testimonial-item-image">
                                    <c-image
                                        :src="require('@/assets/images/testimonial-image-02.jpg')"
                                        alt="Testimonial image 02"
                                        :width="48"
                                        :height="48" />
                                </div>
                            </div>
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div class="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name text-color-high">
                                    Christopher Smith
                                </span>
                                <span class="text-color-low">
                                    <span> - </span> </span>
                                <span class="testimonial-item-link">
                                    <a href="#">AppName</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <div class="testimonial-item-header mb-24">
                                <div class="testimonial-item-image">
                                    <c-image
                                        :src="require('@/assets/images/testimonial-image-03.jpg')"
                                        alt="Testimonial image 03"
                                        :width="48"
                                        :height="48" />
                                </div>
                            </div>
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div class="testimonial-item-footer text-xs fw-500 mt-32 mb-0 pt-24 has-top-divider">
                                <span class="testimonial-item-name">
                                    Diana Tarja
                                </span>
                                <span> - </span>
                                <span class="testimonial-item-link">
                                    <a href="#">AppName</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CTestimonial',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Testimonials -Lorem ipsum is placeholder text commonly used.',
        paragraph: ''
      }
    }
  }
}
</script>