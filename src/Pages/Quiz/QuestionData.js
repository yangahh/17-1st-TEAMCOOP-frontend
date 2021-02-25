const QuestionData = {
  Question1: {
    count: 1,
    title: 'What is your name?',
    chooseCount: '',
    inputData: [{ type: 'text', name: 'name', maxLength: 8 }],
  },
  Question2: {
    count: 2,
    title: 'What is your gender?',
    chooseCount: 'Choose one',
    inputData: [
      { type: 'checkbox', name: 'female', value: false, innerHtml: 'Female' },
      { type: 'checkbox', name: 'male', value: false, innerHtml: 'Male' },
    ],
  },
  Question3: {
    count: 3,
    title: 'What is your age?',
    chooseCount: '',
    inputData: [{ type: 'text', name: 'age', maxLength: 3 }],
  },
  Question4: {
    count: 4,
    title: 'What is your height, weight?',
    chooseCount: '',
    inputData: [
      {
        type: 'text',
        name: 'height',
        maxLength: 3,
        placeholder: 'Please enter your height',
      },
      {
        type: 'text',
        name: 'weight',
        maxLength: 3,
        placeholder: 'Please enter your weight',
      },
    ],
  },
  Question5: {
    count: 5,
    title: 'What is your gender?',
    chooseCount: 'Choose one',
    inputData: [
      {
        type: 'checkbox',
        name: 'workoutLess3hours',
        value: false,
        innerHtml: 'less than 3hours',
      },
      {
        type: 'checkbox',
        name: 'workoutLess6hours',
        value: false,
        innerHtml: '3~6hours',
      },
      {
        type: 'checkbox',
        name: 'workoutMore6hours',
        value: false,
        innerHtml: 'More than 6hours',
      },
    ],
  },
};

export default QuestionData;
