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
    title: 'How often do you workout in a week?',
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
  Question6: {
    count: 6,
    title: 'Do you smoke?',
    chooseCount: 'Choose one',
    inputData: [
      {
        type: 'checkbox',
        name: 'yesSmoke',
        value: false,
        innerHtml: 'YES',
      },
      {
        type: 'checkbox',
        name: 'noSmoke',
        value: false,
        innerHtml: 'NO',
      },
    ],
  },
  Question7: {
    count: 7,
    title: 'How often do you drink in a week?',
    chooseCount: 'Choose one',
    inputData: [
      {
        type: 'checkbox',
        name: 'drinkingLess',
        value: false,
        innerHtml: 'Less than once',
      },
      {
        type: 'checkbox',
        name: 'drinkingMore',
        value: false,
        innerHtml: 'More than once',
      },
    ],
  },
  Question8: {
    count: 8,
    title: 'What is your health goal?',
    chooseCount: 'Choose maximum two',
    inputData: [
      {
        type: 'checkbox',
        name: 'Immunity',
        value: false,
        innerHtml: 'Immunity',
      },
      {
        type: 'checkbox',
        name: 'Brain',
        value: false,
        innerHtml: 'Brain',
      },
      {
        type: 'checkbox',
        name: 'Energy',
        value: false,
        innerHtml: 'Energy',
      },
      {
        type: 'checkbox',
        name: 'Eyes',
        value: false,
        innerHtml: 'Eyes',
      },
      {
        type: 'checkbox',
        name: 'Heart',
        value: false,
        innerHtml: 'Heart',
      },
      {
        type: 'checkbox',
        name: 'Digestion',
        value: false,
        innerHtml: 'Digestion',
      },
      {
        type: 'checkbox',
        name: 'Bones',
        value: false,
        innerHtml: 'Bones',
      },
      {
        type: 'checkbox',
        name: 'Fitness',
        value: false,
        innerHtml: 'Fitness',
      },
    ],
  },
  Question9: {
    count: 9,
    title: 'Are you Vegetarian?',
    chooseCount: 'Choose one',
    inputData: [
      {
        type: 'checkbox',
        name: 'vegan',
        value: false,
        innerHtml: 'Vegan',
      },
      {
        type: 'checkbox',
        name: 'vegetarian',
        value: false,
        innerHtml: 'Vegetarian',
      },
      {
        type: 'checkbox',
        name: 'nonVegetarian',
        value: false,
        innerHtml: 'Non-Vegetarian',
      },
    ],
  },
  Question10: {
    count: 10,
    title: 'Do you have any allergies?',
    chooseCount: 'Multiple choose',
    inputData: [
      {
        type: 'checkbox',
        name: 'soy',
        value: false,
        innerHtml: 'Soy',
      },
      {
        type: 'checkbox',
        name: 'nuts',
        value: false,
        innerHtml: 'Nuts',
      },
      {
        type: 'checkbox',
        name: 'milk',
        value: false,
        innerHtml: 'Milk',
      },
      {
        type: 'checkbox',
        name: 'wheat',
        value: false,
        innerHtml: 'Wheat',
      },
      {
        type: 'checkbox',
        name: 'fish',
        value: false,
        innerHtml: 'Fish',
      },
    ],
  },
  Question11: {
    count: 11,
    title: 'Do you have any diseases?',
    chooseCount: 'Multiple choose',
    inputData: [
      {
        type: 'checkbox',
        name: 'arthritis',
        value: false,
        innerHtml: 'Arthritis',
      },
      {
        type: 'checkbox',
        name: 'diabetes',
        value: false,
        innerHtml: 'Diabetes',
      },
      {
        type: 'checkbox',
        name: 'menstrualIrregularity',
        value: false,
        innerHtml: 'Menstrual irregularity',
      },
      {
        type: 'checkbox',
        name: 'liverDisease',
        value: false,
        innerHtml: 'Liver disease',
      },
      {
        type: 'checkbox',
        name: 'osteoporosis',
        value: false,
        innerHtml: 'Osteoporosis',
      },
    ],
  },
};

export default QuestionData;
