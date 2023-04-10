import { VListItem } from "vuetify/components";
import { DefineComponent } from "vue";

//#region Menus
// Menus 把所有屬性都丟給 VListItem，因此可透過 Menus 控制 VListItem
// 因此 Menus 拿 VListItem 的 $props 作為屬性，並額外加入屬性 id, children
type MenusBase = Pick<
  VListItem['$props'],
  Exclude<keyof VListItem['$props'], `v-${string}` | `$${string}`>
>
type MenusExtra = { id: any }
export type Menu = MenusBase & MenusExtra & { children?: Menu } & any
export type Menus = Array<Menu>;
//#endregion

//#region IProps
export type Props = {
  menus: Menus,
  opened?: string[]
}
//#endregion

const SideMenu :DefineComponent<Props>

export default SideMenu
