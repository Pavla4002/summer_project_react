import Text from 'shared/ui/Text';
import Title from 'shared/ui/Title';
import styles from './index.module.scss';
import Limit from 'shared/ui/Limit';
import SliderPoint from 'shared/ui/Slider/ui/SliderPoint';
import { useState } from 'react';
import startSliderData from 'shared/data/SliderData';

const Slider = () => {
  const [slider, setSlider] = useState(startSliderData);
  return (
    <div className={styles.slider}>
      {slider.map((information, indexInfo) => {
        const { id, img, title, addition } = information;
        return (
          <>
            <div className={styles.image}>
              <img className={styles.picture} src={information.img} alt="" />
            </div>
            <Title transform="capitalize" level={1}>
              Search your favorite <Title color="#FE5B18">food</Title>{' '}
            </Title>
            <Text type="secondary">Все близко!</Text>
            <Limit position="horizontally">
              <SliderPoint />
              <SliderPoint />
              <SliderPoint />
            </Limit>
          </>
        );
      })}
    </div>
  );
};

export default Slider;
