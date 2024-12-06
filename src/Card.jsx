import Count from "./Count";
import Title from "./Title";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import { useState, useEffect } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count >= 5; // Simplified locked logic

  useEffect(() => {
    function handleKeyDown(event) {
      console.log(`Key pressed: ${event.code}`);
      if (event.code === "Space") {
        event.preventDefault(); // Prevent default behavior
        if (!locked) {
          setCount((prev) => {
            console.log(`Incrementing count. Previous count: ${prev}`);
            return prev < 5 ? prev + 1 : prev;
          });
        } else {
          console.log("Count is locked. No increment.");
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    console.log("Global keydown listener added.");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("Global keydown listener removed.");
    };
  }, [locked]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} setCount={setCount} />
      <ResetButton count={count} setCount={setCount} />
      <ButtonContainer count={count} setCount={setCount} locked={locked} />
    </div>
  );
}
