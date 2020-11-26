import { useEffect, useState } from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Give the teacher possibility to create and customized his chatbot
export default function CreateChatForm() {

    // All variables, related to all properties who can be changed
    // Main steps
    const [createdSteps, setCreatedSteps ] = useState([{
        id: '1',
        message: 'Create your own chat'
    }])

    // Chat properties
    const [title, setTitle ] = useState("");

    // Theme
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [theme, setTheme ] = useState({})

    // Update theme when user change something
    useEffect(() => {
        const updateTheme = () => {
            setTheme({
                background: backgroundColor,
            })
        }
        updateTheme()
    }, [backgroundColor])

    return (
        <div>
            <h3>Some space to see how can we create a chat</h3>
            <div className="card">
                <h5>Teacher Fill that part</h5>
                <label>
                    Choose a title : <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Choose a background color : <input value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                </label>
            </div>
            <div>
                <h5>Teacher gets an overview during the creation</h5>
                <ThemeProvider theme={theme}>
                    <ChatBot 
                        steps={createdSteps} 
                        headerTitle={title}
                    />
                </ThemeProvider>
            </div>
        </div>
    );
}
