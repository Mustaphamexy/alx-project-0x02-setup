import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({  name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-xl mx-auto transition-shadow duration-300 hover:shadow-lg">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">address: {address}</p>

    </div>

    )

    };

export default UserCard;