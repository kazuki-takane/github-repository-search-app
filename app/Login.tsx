"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <button onClick={() => signIn("github")}>サインイン</button>
    </div>
  );
};

export default Login;
