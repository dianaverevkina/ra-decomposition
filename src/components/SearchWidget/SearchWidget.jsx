/**
 * Компонент SearchWidget принимает prop списка пунктов меню, который передается в компонент Menu
 * Включает в себя компонент Menu, поисковую строку с кнопкой поиска
 */
import { Menu } from '../Menu/Menu'

export const SearchWidget = ({menuList}) => {
  return (
    <div className='search'>
      <Menu menuList={menuList}/>
      <div className="search__block">
        <div className="logo">
          <img src="#" alt="" />
        </div>
        <form action="" className="search__form">
          <div className="search__field">
            <input className='search__input' type="text" />
          </div>
          <button className="search__button">Найти</button>
        </form>
      </div>
    </div>
  )
}
