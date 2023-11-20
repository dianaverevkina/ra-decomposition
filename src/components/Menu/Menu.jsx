/**
 * Компонент принимает массив пунктов меню, на основании которого создаются компонента MenuItem
 */
import { MenuItem } from "./MenuItem/MenuItem"

export const Menu = ({ menuList }) => {
  return (
    <ul className='menu'>
      {menuList.map(item => <MenuItem key={item} item={item} />)}
    </ul>
  )
}
