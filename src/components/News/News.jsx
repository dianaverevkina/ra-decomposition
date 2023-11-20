/**
 * Компонент News состоит из компонентов Menu, NewsList, CurrencyWidget
 * Принимает props массив пунктов меню, массив объектов новостей, массив объектов валют 
 */
import { NewsList } from "./NewsList/NewsList"
import { CurrencyWidget } from "./CurrencyWidget/CurrencyWidget"
import { Menu } from "../Menu/Menu"

export const News = ({ menuList, newsList, currencyList}) => {
  return (
    
    <div className="app__block">
      <div className="app__news-block">
        <div className="app__news-menu">
          <Menu menuList={menuList}/>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <NewsList newsList={newsList}/>
        <CurrencyWidget currencyList={currencyList}/>
      </div>
      <div className="ad">
        <div className="ad__image">
          <img src="#" alt="Реклама" />
        </div>
        <h3 className="ad__title">Работа над ошибками</h3>
        <p className="ad__text">Смотрите на Яндексе и запоминайте</p>
      </div>
    </div>
    
  )
}
