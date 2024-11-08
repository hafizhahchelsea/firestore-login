import React, {useState} from 'react';
import {auth} from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import img from './asset/pemandangan.jpg';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const [item, setItem] = useState('');

  const handleSignup = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Registered")
    } catch (error){
      alert(error.massage);
    }
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      alert("User Legged in");
    } catch (error) {
      alert(error.message);
    }
  }

  const handleAddItem = async () => {
    if (item) {
      await addDoc(collection(db,'items'), {name: item});
      setItem('')
    }
  };

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] text-center flex flex-col'>
          <h1 className='text-7xl text-white font-bold my-4'>Selamat Datang</h1>
          <p className='text-4xl text-white font-normal'>Log in to your account to continue</p>
        </div>
        <img src={img} className='h-full w-full object-cover justify-start'/>
      </div>
      <div className='flex flex-col bg-pink-200 rounded-lg w-[500px]  h-[500px] px-5 mb-50 pl-10 shadow-md p-10 pt-10 pr-10 mt-[55px] ml-[50px]'>
        <h1 className='text-center text-xl font-semibold'>Firebase Add Data</h1>
        <p>Email:</p>
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}
        className='w-full p-2 border-2 rounded-lg box-border text-base transition-colors duration-100 text-gray-800'></input>
        <p>Password:</p>
        <input type='password' placeholder='password'value={password} onChange={(e) => setPassword(e.target.value)}
        className='w-full p-2 border-2 rounded-lg box-border text-base transition-colors duration-100 text-gray-800'></input>
        <button onClick={handleSignup} className='w-full p-2 bg-pink-600 text-white rounded-lg mt-5'>Sign Up</button>
        <button onClick={handleLogin} className='w-full p-2 bg-pink-400 text-white rounded-lg mt-5'>Login</button>
        <h2 className='p-1 text-center mt-5 font-semibold' >Add Item</h2>
        <input type='text' placeholder='add an items' value={item} onChange={(e) => setItem(e.target.value)}
        className='w-full p-2 border-2 rounded-lg box-border text-base transition-colors duration-100 text-gray-800'></input>
        <button onClick={handleAddItem} className='w-full p-2 bg-pink-600 text-white rounded-lg mt-5'>Add</button>
      </div>
    </div>
  )
} 

export default App;