<template>
    <section
        class="roadmap section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="roadmap-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <c-timeline>
                    <c-timeline-item title="November 2019">
                        Deployed a high-quality first release and conducted a market validation test
                    </c-timeline-item>
                    <c-timeline-item title="December 2019">
                        Deployed a high-quality first release and conducted a market validation test
                    </c-timeline-item>
                    <c-timeline-item title="January 2020">
                        Deployed a high-quality first release and conducted a market validation test
                    </c-timeline-item>
                    <c-timeline-item title="February 2020">
                        Deployed a high-quality first release and conducted a market validation test
                    </c-timeline-item>
                    <c-timeline-item title="March 2020">
                        Deployed a high-quality first release and conducted a market validation test
                    </c-timeline-item>                                                                                
                </c-timeline>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CTimeline from '@/components/elements/Timeline.vue'
import CTimelineItem from '@/components/elements/TimelineItem.vue'

export default {
  name: 'CRoadmap',
  components: {
    CSectionHeader,
    CTimeline,
    CTimelineItem
  },  
  mixins: [SectionProps],
  data() {
    return {
      sectionHeader: {
        title: 'Product roadmap',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  }  
}
</script>