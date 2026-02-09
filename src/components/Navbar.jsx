import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/resources">Resources</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl text-primary font-bold gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.552 50.552 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        EduShare
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/" className='text-lg font-medium'>Home</Link></li>
                        <li><Link to="/resources" className='text-lg font-medium'>Resources</Link></li>
                        <li><Link to="/about" className='text-lg font-medium'>About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link to="/login" className="btn btn-ghost">Login</Link>
                    <Link to="/register" className="btn btn-primary text-white">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
