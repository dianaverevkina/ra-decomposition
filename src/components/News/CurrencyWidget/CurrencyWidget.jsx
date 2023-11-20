/**
 * Компонент принимает список валют, на основании которого создаются элементы валют
 */

export const CurrencyWidget = ({ currencyList }) => {
  return (
    <ul className="currency-list">
    {currencyList.map(currency => {
      return (
        <li className='currency-list__item'>
          {currency.currency} {currency.value}
        </li>
      )
    })
    }
  </ul>
  )
}
