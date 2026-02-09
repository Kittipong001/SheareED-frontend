import Navbar from '../components/Navbar';
import { useState } from 'react';

const Home = () => {
    const [selectedLevel, setSelectedLevel] = useState('All');

    const resources = [
        {
            id: 1,
            title: "Introduction to React",
            author: "Jane Doe",
            category: "Programming",
            level: "University",
            description: "A comprehensive guide to getting started with React.js.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Advanced Mathematics",
            author: "John Smith",
            category: "Mathematics",
            level: "High School",
            description: "Deep dive into calculus and linear algebra for students.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "History of Art",
            author: "Emily White",
            category: "Art",
            level: "University",
            description: "Exploring the renaissance period and its impact on modern art.",
            image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2045&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Physics Fundamentals",
            author: "Robert Brown",
            category: "Science",
            level: "Middle School",
            description: "Understanding the basic laws of physics.",
            image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: 5,
            title: "Basic Algebra",
            author: "Sarah Connor",
            category: "Mathematics",
            level: "Middle School",
            description: "Foundations of algebra for beginners.",
            image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop",
        },
        {
            id: 6,
            title: "Organic Chemistry",
            author: "Walter White",
            category: "Science",
            level: "High School",
            description: "Carbon compounds and their reactions.",
            image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=2070&auto=format&fit=crop",
        }
    ];

    const filteredResources = selectedLevel === 'All'
        ? resources
        : resources.filter(resource => resource.level === selectedLevel);

    const levels = ['All', 'Middle School', 'High School', 'University'];

    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />

            {/* Hero Section */}
            <div className="hero min-h-[50vh] bg-base-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="hero-content text-center z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
                            Share Knowledge, <br />
                            <span className="text-secondary">Empower Future.</span>
                        </h1>
                        <p className="py-4 text-lg text-base-content/70">
                            Discover and share educational resources with the community.
                        </p>
                    </div>
                </div>
            </div>

            {/* Resources Feed */}
            <div className="container mx-auto px-4 py-8">

                {/* Filter Tags */}
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    {levels.map((level) => (
                        <button
                            key={level}
                            className={`btn ${selectedLevel === level ? 'btn-primary' : 'btn-outline'} rounded-full px-6`}
                            onClick={() => setSelectedLevel(level)}
                        >
                            {level === 'Middle School' ? 'ม.ต้น' : level === 'High School' ? 'ม.ปลาย' : level === 'University' ? 'มหาวิทยาลัย' : 'ทั้งหมด'}
                        </button>
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-4 ml-1">
                    {selectedLevel === 'All' ? 'Recent Resources' : `${selectedLevel} Resources`}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredResources.map((resource) => (
                        <div key={resource.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                            <figure className="h-48 overflow-hidden"><img src={resource.image} alt={resource.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" /></figure>
                            <div className="card-body flex-grow p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="badge badge-secondary badge-outline text-xs">{resource.category}</div>
                                    <div className="badge badge-ghost text-xs shadow-sm bg-base-200 border-none">{resource.level === 'Middle School' ? 'ม.ต้น' : resource.level === 'High School' ? 'ม.ปลาย' : 'มหาวิทยาลัย'}</div>
                                </div>
                                <h2 className="card-title text-lg leading-tight mb-1">
                                    {resource.title}
                                </h2>
                                <div className="text-sm text-gray-500 mb-2">By {resource.author}</div>
                                <p className="text-sm text-base-content/80 line-clamp-2 mb-4 flex-grow">{resource.description}</p>
                                <div className="card-actions justify-end mt-auto">
                                    <button className="btn btn-primary btn-sm w-full rounded-lg">Read More</button>
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
