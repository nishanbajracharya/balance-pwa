import Slider, { Settings } from 'react-slick';

import Card from '../components/card';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BalanceState } from '../reducers/balance';

export type SwipeableViewProps = {
  balance: BalanceState;
};

export default function SwipeableView({ balance }: SwipeableViewProps) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
  };

  const cards = [
    { title: 'Balance', value: balance.current, className: 'balance' },
    { title: 'Expenses', value: balance.expenses, className: 'expenses' },
    { title: 'Initial', value: balance.initial, className: 'initial' },
  ];

  return (
    <div className="card-swipe">
      <Slider {...settings}>
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            value={card.value}
            className={card.className}
          />
        ))}
      </Slider>
    </div>
  );
}
