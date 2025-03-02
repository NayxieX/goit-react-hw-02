import style from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedbackValue,
  handleResetFeedback,
}) {
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
      {totalFeedbackValue > 0 && (
        <button className={style.click} onClick={handleResetFeedback}>
          Reset
        </button>
      )}
    </>
  );
}
