/* ================= Options to customize the chat bot ====================== */

// Here we can build our own steps, which will be displayed on chat bot
// For all options see : https://lucasbassetti.com.br/react-simple-chatbot/#/docs/steps

// Later this 'steps' object needs to come from the teacher. 
// We need to create a form which return an object like that

export const steps = [
    {
      id: '1',
      message: 'What number I am thinking?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Number 1', trigger: '4' },
        { value: 2, label: 'Number 2', trigger: '3' },
        { value: 3, label: 'Number 3', trigger: '3' },
      ],
    },
    {
      id: '3',
      message: 'Wrong answer, try again.',
      trigger: '2',
    },
    {
      id: '4',
      message: 'Awesome! You are a telepath!',
      end: true,
    },
];

// Define the theme: color, font size, etc...
export const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

// Guess we can also find where to change avatars, others options (like size, ...)