import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="text-center mt-4">
                            Don't have an account? <Link to="/register" className="link link-primary">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
