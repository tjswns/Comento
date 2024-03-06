import React, { useState } from 'react';

const CreatePostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 동작 방지
    onSubmit(title, content); // 부모 컴포넌트로 제출 이벤트를 전달합니다.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="content">내용:</label>
          <textarea id="content" value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">작성 완료</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
