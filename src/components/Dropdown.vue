<template>
  <div ref="dropdownRef" class="dropdown">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
      {{ title }}
    </a>
    <ul v-if="isOpen" class="dropdown-menu" :style="{ display: 'block' }">
      <slot />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    let isOpen = ref(true)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const dropdownRef = ref<any>(null)
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef,
    }
  },
})
</script>
