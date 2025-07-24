import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="mb-2">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    <div className="text-sm text-gray-400">Post ID: {id}</div>

    </div>
  );
};

export default PostCard;
