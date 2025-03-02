import style from "./Feedback.module.css";
import { BsPercent } from "react-icons/bs";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { RiEmotionNormalLine } from "react-icons/ri";

export default function Feedback({
  feedback,
  totalFeedbackValue,
  positiveFeedback,
}) {
  if (totalFeedbackValue === 0) {
    return null;
  }

  return (
    <div className={style.feedback}>
      <ul>
        <li>
          <h2>Good: {feedback.good}</h2>
          <span>
            <FaRegThumbsUp className={style.icon} />
          </span>
        </li>
        <li>
          <h2>Neutral: {feedback.neutral}</h2>
          <span>
            <RiEmotionNormalLine className={style.icon} />
          </span>
        </li>
        <li>
          <h2>Bad: {feedback.bad}</h2>
          <span>
            <FaRegThumbsDown className={style.icon} />
          </span>
        </li>
        <li>
          <h2>Total: {totalFeedbackValue}</h2>
          <span>
            <BsPeople className={style.icon} />
          </span>
        </li>
        <li>
          <h2>Positive: {positiveFeedback} %</h2>
          <span>
            <BsPercent className={style.icon} />
          </span>
        </li>
      </ul>
    </div>
  );
}
