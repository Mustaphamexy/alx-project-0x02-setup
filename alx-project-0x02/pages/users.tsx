import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";


const Users: React.FC<UserProps []> = ({users})=> {



    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="text-center">
                     <h1 className=" text-2xl font-semibold">Users</h1>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {users.map(({name,  email, address, }: UserProps, key:number) => (
                        <UserCard name={name}  email={email}  address={address.street} key={key} />
                    ))
                    }
                </div>
            </main>

           
        </div>
    )
}



export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users;