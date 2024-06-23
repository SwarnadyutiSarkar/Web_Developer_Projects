import React from 'react';
import Editor from './components/Editor';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className="app">
      <Editor />
      <Chat />
    </div>
  );
};

export default App;
