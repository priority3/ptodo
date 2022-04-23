import { defineComponent } from 'vue'

export default defineComponent({
  props: {},
  emits: [],
  components: {},
  setup(props, ctx) {
    // console.log('this is test')
    console.log(ctx);
    return () => <div>this is ptodohome</div>
  }
})
