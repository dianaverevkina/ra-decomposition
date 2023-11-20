import { News } from './components/News/News';
import './App.css';
import { SearchWidget } from './components/SearchWidget/SearchWidget';
import { WidgetsBlock } from './components/WidgetsBlock/WidgetsBlock';
import { Banner } from './components/Banner/Banner';

function App() {
  const news = [
    {
      imgLink: '#',
      textLink: '#',
      text: 'Суд закрыл дело ...'
    },
    {
      imgLink: '#',
      textLink: '#',
      text: 'Новая школа открылась...'
    }
  ];

  const currencyList = [
    {currency: 'USD', value: '90'}, 
    {currency: 'EUR', value: '98'},
    {currency: 'НЕФТЬ', value: '64'},
  ];

  const datawForWidgetWithList = [
    {
      title: 'Посещаемое',
      content: [
        'Недвижимость - о сталинках',
        'Маркет - люстры и светильники', 
        'Авто.ру - привод 4x4'
      ],
    },
    {
      title: 'Телепрограмма',
      content: [
        '02:00 ТНТ. Best',
        '02:15 Джинглики', 
        '02:15 Наедине со всеми'
      ],
    }
  ];
  const datawForWidgetWithoutList = [
    {
      title: 'Погода',
      content: 'Утром +17, днем +20',
    },
    {
      title: 'Карта России',
      content: 'Расписания',
    }
  ];
 
  return (
    <div className="App">
      <News 
        newsList={news}
        currencyList={currencyList}
        menuList={['Сейчас в СМИ', 'в России', 'Рекомендуем']}
      />
      <SearchWidget 
        menuList={['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Эфир']}
      />
      <Banner img={'#'}/>
      <WidgetsBlock 
        widgetsWithList={datawForWidgetWithList}
        widgetsWithoutList={datawForWidgetWithoutList}
      />
    </div>
  );
}

export default App;
