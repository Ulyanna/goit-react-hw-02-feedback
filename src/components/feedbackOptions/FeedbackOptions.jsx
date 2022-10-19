import React from 'react';
import css from './FeedbackOptions.module.css';
import { Button } from './FeedbackButton.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.FeedbackOptionsList}>
      {options.map(option => {
        return (
          <li key={option}>
            <Button
              type="button"
              optionType={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
