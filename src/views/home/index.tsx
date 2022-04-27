import { defineComponent } from 'vue'
import { emitMsg } from '/@/utils/bus'
import { getTestApi } from '/@/api/test'
export default defineComponent({
  props: {},
  emits: [],
  components: {},
  setup(props, ctx) {
    // emitMsg('test','123')
    getTestApi({
      name: '2',
    }).then((res) => {
      console.log(res)
    })
    return () => <div class="app-container">this is ptodohome</div>
  },
})
