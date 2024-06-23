import React, { useEffect, useRef, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const Editor = () => {
  const [code, setCode] = useState('// Start coding...');
  const editorRef = useRef();

  useEffect(() => {
    socket.on('codeChange', newCode => {
      setCode(newCode);
    });

    return () => {
      socket.off('codeChange');
    };
  }, []);

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
    socket.emit('codeChange', value);
  };

  return (
    <div className="editor-container">
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={handleCodeChange}
        editorDidMount={editor => {
          editorRef.current = editor;
        }}
      />
    </div>
  );
};

export default Editor;
