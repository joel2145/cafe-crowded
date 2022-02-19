import React from 'react'
import { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, password);

    await auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        navigate('/list')
      }).catch(error => {
        return null
      });
  };

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const moveToLogin = () => {
    navigate("/login")
  }

  return (
    <div>
      <h1>新規登録</h1>
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
          <button>新規登録</button>
        </div>
        <div>
          既に登録済みの方はこちら↓
        </div>
        <button type="button" onClick={() => moveToLogin()}>
          ログイン
        </button>
      </form>
    </div>
  );
};

