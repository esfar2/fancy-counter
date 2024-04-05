import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButtons({ number, setNumber }) {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon
          onClick={() => setNumber(number === 0 ? (number = 0) : number-= 1)}
          className="count-btn-icon"
        ></MinusIcon>
      </button>
      <button className="count-btn">
        <PlusIcon
          onClick={() => setNumber((number = number + 1))}
          className="count-btn-icon"
        ></PlusIcon>
      </button>
    </div>
  );
}
