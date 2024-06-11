import React, { useState } from 'react';

import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [pageShown, setPageShown] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1>Hello!</h1>
      <span>{message}</span>
      <button
        type="button"
        onClick={() => {
          setPageShown(true);
        }}
      >
        next
      </button>
      {pageShown && (
        <MessageInput setMessage={setMessage} setShown={setPageShown} />
      )}
    </div>
  );
}

interface IMessageInput {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageInput = ({ setMessage, setShown }: IMessageInput) => {
  return (
    <div className="fixed h-screen w-full flex items-center justify-center bg-gray-900">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShown(false);
        }}
        className="flex items-center justify-center"
      >
        <label htmlFor="messsage">Enter you message</label>
        <input
          type="text"
          name="message"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default App;
