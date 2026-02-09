import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="John Doe" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start gap-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text">I agree to the Terms and Conditions</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="text-center mt-4">
                            Already have an account? <Link to="/login" className="link link-primary">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
