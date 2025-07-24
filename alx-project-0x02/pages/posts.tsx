import { useState } from "react";
import Card from "@/components/common/Card";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps, PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  const [localPosts, setLocalPosts] = useState<CardProps[]>([
    {
      title: "Welcome to ALX",
      content: "This is the ALX project home page using TypeScript and Tailwind CSS.",
    },
    {
      title: "Next.js with Components",
      content: "We are building reusable UI components with props in Next.js.",
    },
    {
      title: "Learning by Doing",
      content: "Practice makes perfect. Keep building and keep learning!",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: CardProps) => {
    setLocalPosts((prev) => [...prev, post]);
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      <Header />

      <div className="mb-6 text-center pt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Local Post
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4 p-6">Local Posts</h2>
      <div className="grid grid-cols-3 gap-4 mb-10 p-6">
        {localPosts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4 p-6">Fetched Posts</h2>
      <div className="grid grid-cols-3 gap-4 p-6">
        {posts.slice(0, 12).map((post) => (
          <PostCard
            key={post.id}
             id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>

      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
