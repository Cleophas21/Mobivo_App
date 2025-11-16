import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
   
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


     const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const res = await axios.post('http://localhost:3000/login', { email, password });
            // storing the generated token in the local storage for easy accessibility
            localStorage.setItem('token', res.data.token);
            alert('You have sucessfully loged in');
            navigate('/home')
        }
        catch (error) {
            console.error(error);
            alert('Invalid Credentials')

        }
    }


    return(
        <section className="flex flex-col justify-center items-center h-screen">

            <form onSubmit={handleLogin}>
                <div className="bg-blue-500 w-100 rounded-md text-center p-10">
                    <h2 className="text-center font-bold text-white">Login</h2>
                    <input type="email" name="" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white p-3 mt-5 w-full rouned-2xl"/> <br />
                    <input type="password" name="" placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white p-3 mt-5 w-full rouned-2xl" /> <br />
                    <input type="submit" value="Signup"  className="bg-blue-900  cursor-pointer rounded-2xl mt-5 p-3 w-full text-white"/>
                </div>
            </form>
        </section>
    )
}


export default Login