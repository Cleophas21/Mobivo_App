
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



function Signup(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    

    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            await axios.post('http://localhost:5000/register', { name, email, password });
            alert('You have sucesfully Registered Login now');
            navigate('/login')

        } catch (error) {
            console.error(error)
            alert('Error has occured during sign up')
        }


    }

    return(
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="bg-blue-500 w-100 rounded-md text-center p-10">
                <h2 className="text-center font-bold text-white">Signup</h2>
                <form onSubmit={handleSignup }>
                    <input type="text" name="" placeholder="name"  value={name} onChange={(e) => setName(e.target.value)} className="bg-white p-3 mt-5 w-full rouned-2xl" /> <br />
                    <input type="email" name="" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white p-3 mt-5 w-full rouned-2xl"/> <br />
                    <input type="password" name="" placeholder="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white p-3 mt-5 w-full rouned-2xl" /> <br />
                    <input type="submit" value="Signup"  className="bg-blue-900  cursor-pointer rounded-2xl mt-5 p-3 w-full text-white"/>
                </form>
            </div>
        </section>
    )
}


export default Signup