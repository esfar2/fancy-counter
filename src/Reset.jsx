import { ResetIcon } from '@radix-ui/react-icons';
function Reset({ number, setNumber }) {
  return (
    <button className="reset-btn">
      <ResetIcon
        onClick={() => setNumber((number = 0))}
        className="reset-btn-icon"
      ></ResetIcon>
    </button>
  );
}

export default Reset;
