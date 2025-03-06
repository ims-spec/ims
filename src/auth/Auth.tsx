import { useEffect, useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(false);
  }, []);

  return isLogin ? <SignIn /> : <SignUp />;
};
