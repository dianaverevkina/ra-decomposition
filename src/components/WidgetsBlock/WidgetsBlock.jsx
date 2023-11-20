/**
 * Компонент состоит из виджетов со списками и виджетов без списков
 * Виджеты создаются на основе компонента WidgetItem с переданными children
 */
import { WidgetItem } from "./WidgetItem/WidgetItem"

export const WidgetsBlock = ({ widgetsWithList, widgetsWithoutList}) => {
  return (
    <div className="widgets-block">
      {widgetsWithoutList.map(widget => {
        return (
          <WidgetItem title={widget.title}>
            <p className="widget__text">
              {widget.content}
            </p> 
          </WidgetItem>
        )
      })}
      {widgetsWithList.map(widget => {
        return (
          <WidgetItem title={widget.title}>
            <ul className="widget__list">
              {widget.content.map(item => {
                return (
                  <li className="widget__list-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </WidgetItem>
        )
      })}
    </div>
  )
}
