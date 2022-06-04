import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hey there!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'May I know your name?',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " Hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Explore Courses' },
            { value: 2, label: 'Know More' },
 
        ],
        end: true
    }
];

// Creating our own theme
const theme = {
	background: '#f2f2f2',
	headerBgColor: '#2b6777',
	headerFontSize: '20px',
	botBubbleColor: '#2b6777',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#52ab98',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	floating: true,
};

function Chatbot() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Anu-Bot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chatbot;
