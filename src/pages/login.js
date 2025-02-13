import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import LoginForm from "../components/login/LoginForm";
import Logo from "../components/Logo";

const LoginPage = () => {
  const router = useRouter();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      router.replace("/dashboard");
    }
  }, [token, router]);

  if (token) return null;

  return (
    <div className="relative h-screen bg-custom-shadeGray">
      {/* Top Right Logo */}
      <div className="absolute top-10 right-6">
        <Logo
          logoImage="/assets/meetusvr_logo_login.png"
          logoText="/assets/meetusvr_logo_text.png"
        />
      </div>
  
      {/* Bottom Left Login Form */}
      <div className="absolute bottom-6 left-6 w-full max-w-[400px]">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;