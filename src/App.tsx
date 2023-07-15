import { RegularButton, SkipButton } from 'shared/ui';
import MainTitle from 'shared/ui/MainTitle';
import SmallGrayText from 'shared/ui/SmallGrayText';
import OrangeMainTitle from 'shared/ui/OrangeMainTitle';

//Для примера задан размер кнтейнеру с кнопкой
const container = {
  width: 150,
  height: 50,
  margin: 20,
};

function App() {
  return (
    <div>
      <span>Кнопки:</span>
      <SkipButton />
      {/*  Для примера размеров контейнер с кнопкой*/}
      <div style={container}>
        <RegularButton>Далее</RegularButton>
      </div>
      <span>Тексты:</span>
      <MainTitle>Заголовок главный</MainTitle>
      <SmallGrayText>Маленький серый текст</SmallGrayText>
      <OrangeMainTitle>Оранжевый заголовок</OrangeMainTitle>
      <MainTitle>
        <OrangeMainTitle>Заголовок</OrangeMainTitle>главный
      </MainTitle>
    </div>
  );
}

export default App;
