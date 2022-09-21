import { CSSProperties, ReactNode } from 'react';

export type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  className?: string;
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode;
  style?: CSSProperties;
  /**点击菜单项触发的回掉函数 */
  onSelect?: (selectedIndex: string) => void;
  /**设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[];
  children?: ReactNode;
}
export interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];  
}

// subMenu
export interface SubMenuProps {
  index?: string;
  /**下拉菜单选项的文字 */
  title: string;
  /**下拉菜单选型的扩展类名 */
  className?: string;
  children?: ReactNode;
}

// MenuItem
export interface MenuItemProps {
  index?: string;
  /**选项是否被禁用 */
  disabled?: boolean;
  /**选项扩展的 className */
  className?: string;
  /**选项的自定义 style */
  style?: React.CSSProperties;
  children?: ReactNode;
}