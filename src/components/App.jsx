import React, { Component } from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlerFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = totalFeedback => {
    return Math.round((100 / totalFeedback) * this.state.good);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(totalFeedback);
    return (
      <>
        <h1>Feedback page</h1>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handlerFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={PositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
