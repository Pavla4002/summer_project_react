import { RegularButton, SkipButton } from 'shared/ui';
import MainTitle from 'shared/ui/MainTitle';
import SmallGrayText from 'shared/ui/SmallGrayText';
import OrangeMainTitle from 'shared/ui/OrangeMainTitle';
import Text from 'shared/ui/Text';

function App() {
  return (
    <div>
      <span>Кнопки:</span>
      <SkipButton />
      <div>
        <RegularButton height="50px" width="150px">
          Далее
        </RegularButton>
      </div>
      <span>Тексты:</span>
      <MainTitle>Заголовок главный</MainTitle>
      <div>
        <SmallGrayText>Маленький серый текст</SmallGrayText>
      </div>
      <div>
        <OrangeMainTitle>Оранжевый заголовок</OrangeMainTitle>
      </div>
      <MainTitle>
        <OrangeMainTitle>Заголовок</OrangeMainTitle> главный
      </MainTitle>
      <Text> Game over!!!</Text>
    </div>
  );
}

export default App;
