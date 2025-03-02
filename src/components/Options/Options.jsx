import style from "./Options.module.css";
import Reset from "../Reset/Reset";

export default function Options({
  updateFeedback,
  totalFeedbackValue,
  feedback,
  setFeedback,
}) {
  function handleResetFeedback() {
    const initialState = { good: 0, neutral: 0, bad: 0 };
    setFeedback(initialState);
    localStorage.setItem("feedback-value", JSON.stringify(initialState));
  }

  return (
    <>
      <button className={style.click} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={style.click} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={style.click} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedbackValue > 0 && <Reset onReset={handleResetFeedback} />}
    </>
  );
}
