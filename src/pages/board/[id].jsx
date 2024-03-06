import { useRouter } from 'next/router';
import CreatePostForm from './CreatePostForm';
const PostDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = (title, content) => {
    console.log('글 수정 완료');
    console.log('제목:', title);
    console.log('내용:', content);
    router.push('/');

  };

  return (
    <div component="main" maxWidth="md">

        Post id : {id} 
   <h2>게시물 수정</h2>
      <CreatePostForm onSubmit={handleSubmit} />

    </div>
  );
};

export default PostDetailPage;
