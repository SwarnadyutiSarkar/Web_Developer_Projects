// src/components/CodeEditor.js
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';

const CodeEditor = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.code);
  const codeMirrorRef = useRef(null);

  useEffect(() => {
    const handleChange = (editor, data, value) => {
      dispatch({ type: 'UPDATE_CODE', payload: value });
    };

    if (codeMirrorRef.current) {
      codeMirrorRef.current.editor.on('change', handleChange);
    }

    return () => {
      if (codeMirrorRef.current) {
        codeMirrorRef.current.editor.off('change', handleChange);
      }
    };
  }, [dispatch]);

  return (
    <div>
      <h2>Code Editor</h2>
      <CodeMirror
        ref={codeMirrorRef}
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
