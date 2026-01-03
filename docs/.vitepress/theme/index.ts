import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import { setupGuideInteractions } from './guide'
import './guide.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    const refresh = () => {
      if (typeof window === 'undefined') return
      nextTick(() => setupGuideInteractions())
    }

    onMounted(refresh)
    watch(() => route.path, refresh)
  }
}
