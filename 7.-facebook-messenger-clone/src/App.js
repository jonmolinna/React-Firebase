import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in React.
  // useEffect = run code on a condition in React
  // if its blank inside [], this runs ONCE when the app component loads

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/125px-Facebook_Messenger_4_Logo.svg.png" alt=""/>
      <h1>Facebook Messenger Clone</h1>
      <h2>Welcome {username}</h2>

      <form className="app_form">
        <FormControl className="app__formControl">
          <Input
            className="app_input" 
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Enter a message...' 
          />
          <IconButton
            className="app__iconButton"
            disabled={!input} 
            variant="contained" 
            color="primary" 
            type="submit" 
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;