import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMyContext } from '../../context/MyContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { analytics, auth, fireDB, logEvent } from '../../firebase/firebaseCongif';
import { onSnapshot, query, where, collection } from 'firebase/firestore';
import Loader from '../loader/Loader';


const Login = () => {
    const [credential, setCredential] = useState({ email: "", password: "" });
    const [password, setPassword] = useState(true);
    const { loading, setLoading } = useMyContext();
    const navigate = useNavigate();

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    const userLoginFunction = async (e) => {
        e.preventDefault();
        if (credential.email === "", credential.password === '') {
            toast.error('All filed are required');
            logEvent(analytics, 'login_attempt', {
                success: false,
                error: 'All fields are required'
            });
        }
        setLoading(true);

        try {
            const users = await signInWithEmailAndPassword(auth, credential.email, credential.password);
            logEvent(analytics, 'login_attempt', {
                success: false,
                email: credential.email
            });
            try {
                const q = query(
                    collection(fireDB, 'user'),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem('users', JSON.stringify(user))

                    setCredential({
                        email: "",
                        password: ''
                    });

                    toast.success('Login Successfully');
                    logEvent(analytics, 'login_success', {
                        email: credential.email
                    });
                    setLoading(false);
                    navigate('/')
                })
            } catch (error) {
                toast.error('Something went wrong');
                logEvent(analytics, 'login_attempt', {
                    success: false,
                    error: 'Something went wrong'
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {loading && <Loader />}
            <div className="flex items-center justify-center min-h-screen bg-background pt-20  dark:bg-black">
                <div className="bg-card dark:bg-card bg-blue-gray-100 p-8 rounded-lg shadow-l bg-slate-100 w-full max-w-md flex flex-col items-">
                    <p className="text-3xl font-bold mb-6">Login your account</p>
                    <form onSubmit={userLoginFunction} className="w-full">
                        <div className="mb-4">
                            <input type="email" placeholder="Email" name='email' onChange={onChange} value={credential.email} className="w-full p-3   border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" />
                        </div>
                        <div className="mb-4 relative">
                            <input
                                onChange={onChange} value={credential.password} type={password ? 'password' : 'text'} name="password" placeholder="Password"
                                className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 pr-10"
                            />
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400 dark:text-zinc-500" >
                                <span onClick={() => setPassword(!password)} className='pr-4 inline-block' >{password ? <FaRegEye /> : <FaRegEyeSlash />}  </span>
                            </button>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 dark:bg-blue-500 text-white dark:text-white p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600">Login</button>
                        <p className="text-center mt-4 text-sm text-blue-500 dark:text-blue-400 hover:underline">Forgot your password?</p>
                    </form>
                    <div className="text-center mt-4 text-sm text-primary dark:text-primary-foreground">
                        By continuing, you agree to CoveCart's <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
                        <hr className="my-4 border-t border-gray-400" />
                        <Link to="/signup" className="text-blue-500 block"> New on CoveCart? signup</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}

export default Login
