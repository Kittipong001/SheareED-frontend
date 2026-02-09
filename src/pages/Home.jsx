import Navbar from '../components/Navbar';

const Home = () => {
    const resources = [
        {
            id: 1,
            title: "Introduction to React",
            author: "Jane Doe",
            category: "Programming",
            description: "A comprehensive guide to getting started with React.js.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Advanced Mathematics",
            author: "John Smith",
            category: "Mathematics",
            description: "Deep dive into calculus and linear algebra for students.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "History of Art",
            author: "Emily White",
            category: "Art",
            description: "Exploring the renaissance period and its impact on modern art.",
            image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2045&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Physics Fundamentals",
            author: "Robert Brown",
            category: "Science",
            description: "Understanding the basic laws of physics.",
            image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2070&auto=format&fit=crop",
        },
    ];

    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />

            {/* Hero Section */}
            <div className="hero min-h-[60vh] bg-base-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="hero-content text-center z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
                            Share Knowledge, <br />
                            <span className="text-secondary">Empower Future.</span>
                        </h1>
                        <p className="py-6 text-lg md:text-xl text-base-content/70">
                            Discover and share educational resources with the community.
                            Join thousands of students and teachers making learning accessible for everyone.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary btn-lg shadow-lg">Explore Resources</button>
                            <button className="btn btn-outline btn-lg">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resources Feed */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Recent Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                        <div key={resource.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <figure><img src={resource.image} alt={resource.title} /></figure>
                            <div className="card-body">
                                <div className="badge badge-secondary">{resource.category}</div>
                                <h2 className="card-title">
                                    {resource.title}
                                </h2>
                                <p>{resource.description}</p>
                                <div className="card-actions justify-end items-center mt-4">
                                    <div className="text-sm text-gray-500 mr-auto">By {resource.author}</div>
                                    <button className="btn btn-primary btn-sm">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
