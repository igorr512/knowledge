import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import "./Editor.css"
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
    [{ direction: 'rtl' }],
    [{ 'align': [] }]

  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link', 'image','direction','align'
];

const rtlStyle = {
  direction: 'rtl',
  textAlign: 'right',
};

const Editor = () => {
  const [text, setText] = useState('');

  const handleChange = (content, delta, source, editor) => {
    setText(content);
  };

  return (
    <div className='editor-size'>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={text}
        onChange={handleChange}
        style={{height:"40vh"}}
        // style={{ direction: 'rtl' }} // Apply RTL style to the editor
      />
    </div>
  );
};

export default Editor;
