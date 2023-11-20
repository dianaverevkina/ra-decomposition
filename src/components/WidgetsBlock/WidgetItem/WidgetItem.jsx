/**
 * Компонент WidgetItem принимает props заголовка виджета и переданных children
 */

export const WidgetItem = ({title, children}) => {
  return (
    <div className='widget'>
      <h2 className='widget__title'>{title}</h2>
      <div className="widget__content">{children}</div>
    </div>
  )
}
