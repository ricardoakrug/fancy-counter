/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton({ type, setCount, locked }) {
  function handleIncrement() {
    console.log("Button clicked: Increment");
    setCount((prev) => {
      console.log(`Incrementing count via button. Previous count: ${prev}`);
      return prev < 5 ? prev + 1 : prev;
    });
  }

  function handleDecrement() {
    console.log("Button clicked: Decrement");
    setCount((prev) => {
      console.log(`Decrementing count via button. Previous count: ${prev}`);
      return prev > 0 ? prev - 1 : prev;
    });
  }

  return (
    <button
      onClick={type === "minus" ? handleDecrement : handleIncrement}
      className="count-btn"
      disabled={locked && type === "plus"}
      aria-label={type === "minus" ? "Decrease count" : "Increase count"}
    >
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}

export default CountButton;
