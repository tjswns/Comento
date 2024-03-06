import React from 'react';
import { useRouter } from 'next/router';
import CreatePostForm from '../CreatePostForm';

const CreatePostPage = () => {
  const router = useRouter();

  const handleSubmit = (title, content) => {
    console.log('새 글 작성 완료');
    console.log('제목:', title);
    console.log('내용:', content);
    router.push('/');
  };

  return (
    <div>
      <h2>새 글 작성</h2>
      <CreatePostForm onSubmit={handleSubmit} /> {/* CreatePostForm 컴포넌트를 렌더링하고 handleSubmit 함수를 props로 전달합니다. */}
    </div>
  );
};

export default CreatePostPage;
