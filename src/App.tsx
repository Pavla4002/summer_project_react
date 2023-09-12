import { RegularButton, SkipButton, Slider } from 'shared/ui';
import Title from 'shared/ui/Title';
import Text from 'shared/ui/Text';

function App() {
  return (
    <div>
      <span>Кнопки:</span>
      <SkipButton />
      <div>
        <RegularButton height={50} width={150}>
          Далее
        </RegularButton>
      </div>
      <span>Тексты:</span>
      <div>
        <Title level={1}>
          Заголовок главный простой {''}
          <Title color="#FE5B18" transform="uppercase">
            оранжевый
          </Title>
        </Title>
      </div>
      <div>
        <Title level={1} color="#FE5B18">
          Заголовок главный оранжевый
        </Title>
      </div>
      <Text type="secondary"> Game over!!!</Text>
      <Text type="attention"> Game over!!!</Text>
      <Text> Game over!!!</Text>
      <Slider />
    </div>
  );
}

export default App;
