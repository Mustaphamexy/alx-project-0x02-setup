import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-r from-blue-500 to-purple-600 py-10 px-4">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold">Welcome to our Application!</h1>
          <p className="mt-4 text-xl">We're glad you're here. Explore and enjoy your experience.</p>
          <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-3 items-center gap-6">
          <Card
            title="Powerful Tools"
            content="Explore our platform's robust tools to help streamline your work and boost productivity."
          />
          <Card
            title="Community Support"
            content="Join a vibrant community of developers and learners ready to help and grow together."
          />
          <Card
            title="Continuous Learning"
            content="New resources and features are added regularly to help you stay ahead of the curve."
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
