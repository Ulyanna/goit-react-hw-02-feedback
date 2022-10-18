import React from 'react';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.FeedbackOptionsList}>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
