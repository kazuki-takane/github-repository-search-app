"use client";

import { signOut } from "next-auth/react";

const Login = () => {
  return (
    <div className="mr-4 bg-cyan-500 text-white rounded py-1 px-2 hover:opacity-70 text-xs md:text-base">
      <button onClick={() => signOut()}>ログアウトする</button>
    </div>
  );
};

export default Login;
