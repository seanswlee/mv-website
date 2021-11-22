<template>
    <section
        class="pricing section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="pricing-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    v-if="pricingSwitcher"
                    class="pricing-switcher center-content"
                >
                    <c-switch
                        v-model="priceChangerValue"
                        true-value="1"
                        false-value="0"
                        right-label="Billed Annually">
                        Billed Monthly
                    </c-switch>
                </div>
                <div
                    v-if="pricingSlider"
                    class="pricing-slider center-content"
                >
                    <label class="form-slider">
                        <span class="mb-16">How many users do you have?</span>
                        <input
                            type="range"
                            ref="slider"
                            v-model="priceChangerValue"
                            @input="handlePricingSlide"
                            />
                        </label>
                    <div ref="sliderValue" class="pricing-slider-value">
                        {{ getPricingData(priceInput) }}
                    </div>
                </div>                
                <div
                    class="tiles-wrap has-bg-color"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan1, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan1, 1) }}</span>
                                        <span class="pricing-item-price-after text-sm">{{ getPricingData(this.priceOutput.plan1, 2) }}</span>
                                    </div>
                                    <div class="text-color-low text-xs mt-4 mb-4">
                                        Lorem ipsum is a common text
                                    </div>
                                </div>
                                <div class="pricing-item-features mb-40">
                                    <div class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        What’s included
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li>Excepteur sint occaecat velit</li>
                                        <li>Excepteur sint occaecat velit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="secondary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="200">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan2, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan2, 1) }}</span>
                                        <span class="pricing-item-price-after text-sm">{{ getPricingData(this.priceOutput.plan2, 2) }}</span>
                                    </div>
                                    <div class="text-color-low text-xs mt-4 mb-4">
                                        Lorem ipsum is a common text
                                    </div>
                                </div>
                                <div class="pricing-item-features mb-40">
                                    <div class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        What’s included
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li>Excepteur sint occaecat velit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="secondary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan3, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan3, 1) }}</span>
                                        <span class="pricing-item-price-after text-sm">{{ getPricingData(this.priceOutput.plan3, 2) }}</span>
                                    </div>
                                    <div class="text-color-low text-xs mt-4 mb-4">
                                        Lorem ipsum is a common text
                                    </div>
                                </div>
                                <div class="pricing-item-features mb-40">
                                    <div class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                                        What’s included
                                    </div>
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                        <li class="is-checked">Excepteur sint occaecat velit</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="secondary" wide href="#">Start free trial</c-button>
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
import CSwitch from '@/components/elements/Switch.vue'
import CButton from '@/components/elements/Button.vue'

export default {
  name: 'CPricing',
  components: {
    CSectionHeader,
    CSwitch,
    CButton
  },
  mixins: [SectionTilesProps],
  props: {
    pricingSwitcher: {
      type: Boolean,
      default: false
    },
    pricingSlider: {
      type: Boolean,
      default: false
    }        
  },
  data() {
    return {
      sectionHeader: {
        title: 'Simple, transarent pricing',
        paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
      },
      priceChangerValue: "1",
      priceInput: {
        0: "1,000",
        1: "1,250",
        2: "1,500",
        3: "2,000",
        4: "2,500",
        5: "3,500",
        6: "6,000",
        7: "15,000",
        8: "50,000"
      },
      priceOutput: {
        plan1: {
          0: ["", "Free", ""],
          1: ["$", "13", "/m"],
          2: ["$", "17", "/m"],
          3: ["$", "21", "/m"],
          4: ["$", "25", "/m"],
          5: ["$", "42", "/m"],
          6: ["$", "58", "/m"],
          7: ["$", "117", "/m"],
          8: ["$", "208", "/m"]
        },
        plan2: {
          0: ["$", "13", "/m"],
          1: ["$", "17", "/m"],
          2: ["$", "21", "/m"],
          3: ["$", "25", "/m"],
          4: ["$", "42", "/m"],
          5: ["$", "58", "/m"],
          6: ["$", "117", "/m"],
          7: ["$", "208", "/m"],
          8: ["$", "299", "/m"]
        },
        plan3: {
          0: ["$", "17", "/m"],
          1: ["$", "21", "/m"],
          2: ["$", "25", "/m"],
          3: ["$", "42", "/m"],
          4: ["$", "58", "/m"],
          5: ["$", "117", "/m"],
          6: ["$", "208", "/m"],
          7: ["$", "299", "/m"],
          8: ["$", "499", "/m"]
        }
      }
    }
  },
  methods: {    
    handlePricingSlide(e) {
      this.handleSliderValuePosition(e.target)
    },
    handleSliderValuePosition(input) {
      const multiplier = input.value / input.max
      const thumbOffset = this.thumbSize * multiplier
      const priceInputOffset = (this.thumbSize - this.$refs.sliderValue.clientWidth) / 2
      this.$refs.sliderValue.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px'
    },
    getPricingData(values, set) {
      return set !== undefined ? values[this.priceChangerValue][set] : values[this.priceChangerValue]
    }
  },
  mounted() {
    if (this.pricingSlider) {
      this.$refs.slider.setAttribute('min', 0)
      this.$refs.slider.setAttribute('max', Object.keys(this.priceInput).length - 1)
      this.thumbSize = parseInt(window.getComputedStyle(this.$refs.sliderValue).getPropertyValue('--thumb-size'), 10)
      this.handleSliderValuePosition(this.$refs.slider)
    }        
  }
}
</script>