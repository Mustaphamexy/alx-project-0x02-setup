import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


const About : React.FC = () => {
    return (
        <div className="h-screen bg-gray-100 text-center">
        <Header/>
      <h1 className="text-3xl font-bold mb-8 pt-4">About Page</h1>
      <div className="flex flex-col items-center gap-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
    )
}

export default About;