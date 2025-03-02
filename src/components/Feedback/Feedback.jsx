import style from "./Feedback.module.css";
import { BsPercent } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { RiEmotionNormalLine } from "react-icons/ri";
export default function Feedback({
  feedback,
  totalFeedbackValue,
  positiveFeedback,
}) {
  return (
    <div className={style.feedback}>
      <ul>
        <li>
          <h2>Good:{feedback.good}</h2>
          <div>
            <span>
              <FaRegThumbsUp className={style.icon} />
            </span>
          </div>
        </li>
        <li>
          <h2>Neutral:{feedback.neutral}</h2>
          <div>
            <span>
              <RiEmotionNormalLine className={style.icon} />
            </span>
          </div>
        </li>
        <li>
          <h2>Bad: {feedback.bad}</h2>
          <div>
            <span>
              <FaRegThumbsDown className={style.icon} />
            </span>
          </div>
        </li>

        <li>
          <h2>Total: {totalFeedbackValue}</h2>
          <div>
            <span>
              <BsPeople className={style.icon} />
            </span>
          </div>
        </li>

        <li>
          <h2>Positive: {positiveFeedback} %</h2>
          <div>
            <span>
              <BsPercent className={style.icon} />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
