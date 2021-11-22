<template>
    <li :class="{ 'is-active': isActive }">
        <div class="accordion-header text-sm" @click="isActive ? closeItem() : openItem()">
            <span class="text-sm text-color-high fw-500">{{title}}</span>
            <div class="accordion-icon"></div>
        </div>
        <div ref="content" class="accordion-content text-xs">
            <p>
                <slot />
            </p>
        </div>
    </li>
</template>

<script>
export default {
  name: 'CAccordionItem',
  props: {
    active: Boolean,
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isActive: this.active || false
    }
  },
  methods: {
    openItem() {
      this.$refs.content.style.maxHeight =
        this.$refs.content.scrollHeight + 'px'
      this.isActive = true
    },
    closeItem() {
      this.$refs.content.style.maxHeight = null
      this.isActive = false
    }
  },
  mounted() {
    this.isActive && this.openItem()
  }
}
</script>
