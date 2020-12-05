export const premadeThemes = [
    {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    },
    {
        background: 'green',
        fontFamily: 'Helvetica Neue',
        headerBgColor: 'blue',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: 'green',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    },
    {
        background: 'pink',
        fontFamily: 'Helvetica Neue',
        headerBgColor: 'rgb(182, 24, 50)',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: 'yellow',
        botFontColor: 'black',
        userBubbleColor: 'black',
        userFontColor: '#4a4a4a',
    }
];

export const stepsTemplate1 = [
    {
        id: '1',
        message: '18 + 12',
        trigger: '2',
    },
    {
        id: '2',
        options: [
            { value: 1, label: '30', trigger: '4' },
            { value: 2, label: '28', trigger: '3' },
            { value: 3, label: '182', trigger: '3' },
          ],
    },
    {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
    },
    {
        id: '4',
        message: 'Awesome! Well Done !',
        end: true,
    },
];

export const stepsTemplate2 = [
    {
        id: '1',
        message: 'Default question, type ok to move on',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: (value) => {
            if (value.value === 'ok') {
                return '4';
            }
            return '3';
        }
    },
    {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
    },
    {
        id: '4',
        message: 'Awesome! Well Done !',
        end: true,
    },
];

export const defaultSteps = [
    {
        id: '1',
        message: 'Create Your own',
        end: true,
    },
]