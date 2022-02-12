import React from 'react'
import { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(firebaseConfig)

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    // const { email, password } = event.target.elements;
    auth.createUserWithEmailAndPassword(email, password);
    navigate('/list');
  };


  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};

