import { h, defineComponent } from "vue";
import { VList, VListGroup, VListItem } from "vuetify/components/VList";
const component = defineComponent({
  props: {
    menus: { type: Array, default: [] },
    depth: { type: Number, default: 0 },
    opened: { type: Array, default: [] }
  },
  setup( props ) {
    const { menus, depth, opened } = props
    const el = menus.map((x)=>
      x.children?.length > 0
        ? h( VListGroup, { value: x.id },
          {
            default: () => h(component, { menus: x.children, depth: depth + 1}),
            activator: (e) => h(VListItem, { ...x, ...e.props, children: undefined })
          })
        :h( VListItem, { ...x })
    )
    return depth === 0 ?  ()=>h( VList, { opened }, () => el ) :  ()=>el
  }
})

export default component
