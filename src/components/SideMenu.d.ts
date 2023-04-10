import { VListItem } from "vuetify/components";
import { DefineComponent } from "vue";

// Menus 把所有屬性都丟給 VListItem，因此可透過 Menus 控制 VListItem
// 因此 Menus 拿 VListItem 的 $props 作為屬性，並額外加入屬性 id, children
export type Menus = VListItem['$props'] & {
    id: any,
    children: VListItem['$props']
  };
export interface IProps {
  menus: Menus,
  opened?: string[]
}
const SideMenu :DefineComponent<IProps>

export default SideMenu
