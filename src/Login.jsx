import { authService } from './fbase';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ourUer, setOurUser] = useState(true);
  const [error, setError] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let data;
    try {
      if (ourUer) {
        data = await signInWithEmailAndPassword(authService, email, password);
        console.log('로그인 됨!');
      }
    } catch (error) {
      setOurUser(false);
      setError(error.message);
    }
  };

  const onSocialClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(authService, provider);
    console.log(result);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name='email' type='email' placeholder='Email' value={email} onChange={onChange} required />
        <input name='password' type='password' placeholder='Password' value={password} onChange={onChange} required />
        <input type='submit' value={ourUer ? 'Log In' : '회원가입을 해주세요'} />
        <span>{error}</span>
        <div>
          <button name='google' onClick={onSocialClick}>
            Continue with Google
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
