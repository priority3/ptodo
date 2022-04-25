import { defineComponent } from 'vue'
import { emitMsg } from '/@/utils/bus'

export default defineComponent({
  props: {},
  emits: [],
  components: {},
  setup(props, ctx) {
    // emitMsg('test','123')
    return () => <div class="app-container">this is ptodohome</div>
  },
})
