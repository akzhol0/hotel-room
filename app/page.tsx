"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordEye, setPasswordEye] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // signInWithEmailAndPassword(auth, login, password)
    //   .then((userCredential) => {
    //     localStorage.setItem("userId", JSON.stringify(userCredential.user.uid));

    //     checkIfUserLogged();
    //     router.push("/profile");
    //   })
    //   .catch((err) => {
    //     setError(err.code);
    //   });
  };

  return (
    <div className="w-full min-h-[600px] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center rounded-xl text-black"
      >
        <p className="text-3xl py-4">Log In</p>
        <div className="flex flex-col gap-4">
          <input
            className="w-[300px] rounded-lg ps-2 h-[60px] border-b border-1 focus:outline-0"
            placeholder="почта"
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <div className="flex relative">
            <input
              className="w-[300px] rounded-lg ps-2 h-[60px] border-b border-1 focus:outline-0"
              placeholder="пароль"
              type={passwordEye ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={() => setPasswordEye(!passwordEye)}
              className="absolute right-4 bottom-4 cursor-pointer"
            ></div>
          </div>
          <Link href="/register">
            <p className="text-sm text-center cursor-pointer">
              Зарегестрироваться
            </p>
          </Link>
          <button
            type="submit"
            className="bg-[#131313] border-white hover:bg-red-500 duration-300 text-white"
          >
            Войти
          </button>
          <p className="text-sm text-center cursor-pointer text-red-600">
            {error}
          </p>
        </div>
      </form>
    </div>
  );
}
