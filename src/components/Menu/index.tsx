import { FC } from 'react';
import _Menu from './menu';
import { MenuProps } from './type';
import SubMenu from './subMenu';
import MenuItem from './menuItem';

import {SubMenuProps,MenuItemProps} from './type'

export * from './type';

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};
const TransMenu = _Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export const Menu = _Menu;

export default TransMenu;
