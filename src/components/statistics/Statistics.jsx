import React from 'react';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <p>
          Good : <span className={css.number}>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral :<span className={css.number}> {neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad :<span className={css.number}> {bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total :<span className={css.number}> {total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback :
          <span className={css.number}> {positivePercentage} %</span>
        </p>
      </li>
    </ul>
  );
};
