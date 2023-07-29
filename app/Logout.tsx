"use client";

import { signOut } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <button onClick={() => signOut()}>サインアウト</button>
    </div>
  );
};

export default Login;
