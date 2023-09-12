import { RegularButton, Slider } from 'shared/ui';
import Limit from 'shared/ui/Limit';

const Entrance = () => {
  return (
    <div>
      <Limit>
        <Slider />
        <RegularButton width={250} height={50}>
          Далее
        </RegularButton>
      </Limit>
    </div>
  );
};

export default Entrance;
