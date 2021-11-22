<template>
    <section
        class="clients section reveal-fade"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="clients-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <ul class="list-reset">
                    <li class="reveal-from-bottom">
                        <c-image
                            :src="require('@/assets/images/clients-01.svg')"
                            alt="Client 01"
                            :width="124"
                            :height="24" />
                    </li>
                    <li class="reveal-from-bottom" data-reveal-delay="150">
                        <c-image
                            :src="require('@/assets/images/clients-02.svg')"
                            alt="Client 02"
                            :width="83"
                            :height="30" />
                    </li>
                    <li class="reveal-from-bottom" data-reveal-delay="300">
                        <c-image
                            :src="require('@/assets/images/clients-03.svg')"
                            alt="Client 03"
                            :width="125"
                            :height="39" />
                    </li>
                    <li class="reveal-from-bottom" data-reveal-delay="450">
                        <c-image
                            :src="require('@/assets/images/clients-04.svg')"
                            alt="Client 04"
                            :width="150"
                            :height="31" />
                    </li>
                    <li class="reveal-from-bottom" data-reveal-delay="600">
                        <c-image
                            :src="require('@/assets/images/clients-05.svg')"
                            alt="Client 05"
                            :width="113"
                            :height="30" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CClients',
  components: {
    CImage
  },
  mixins: [SectionProps]
}
</script>