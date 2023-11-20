/**
 * Компонент NewsItem принимает объект новости, содержащий ссылку на картинку,
 * ссылку на текст и заголовок новости
 */

export const NewsItem = ({data}) => {
  const { imgLink, newsLink, text } = data;
  return (
    <li className='news'>
      <span className="news__img">
        <img src={imgLink} alt="" />
      </span>
      <a href={newsLink} className="news__content">{text}</a>
    </li>
  )
}
