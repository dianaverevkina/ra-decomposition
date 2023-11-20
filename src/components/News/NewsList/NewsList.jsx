/**
 * Компонент NewsList состоит из компонентов NewsItem
 * Принимает prop массив объектов новостей 
 */
import { NewsItem } from "./NewsItem/NewsItem"

export const NewsList = ({newsList}) => {
  return (
    <ul className="news-list">
      {newsList.map(news => <NewsItem data={news}/>)}
    </ul>
  )
}
