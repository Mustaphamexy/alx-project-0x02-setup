import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h3 className="font-bold text-2xl"><Link href="/home">New Webite</Link></h3>
                <nav>
                    <ul className="flex space-x-6">
                        <li className="hover:underline">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/users">Users</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;