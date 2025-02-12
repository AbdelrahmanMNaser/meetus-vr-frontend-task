import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { loginSuccess } from "../store/authSlice";
import Sidebar from "../components/dashboard/Sidebar";
import WelcomeHeader from "@/components/dashboard/Header";
import UserInfoCard from "@/components/dashboard/UserInfoCard";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!isAuthenticated) {
      router.replace("/login");
    } else {
      fetchUserInfo();
    }
  }, [isAuthenticated, router]);

  const fetchUserInfo = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        router.replace("/login");
        return;
      }

      const response = await fetch(
        "https://api-yeshtery.dev.meetusvr.com/v1/user/info",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        dispatch(
          loginSuccess({
            userInfo: userData,
            token: token,
            refresh: Cookies.get("refresh"),
          })
        );
      } else {
        handleLogout();
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      handleLogout();
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("refresh");
    router.replace("/login");
  };

  // Prevent hydration issues by not rendering until client-side
  if (!isClient) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar onLogout={handleLogout} />

      <main className="ml-64 min-h-screen p-8">
        <div className="max-w-4xl">
          <WelcomeHeader userName={user?.name} />
          <div className="bg-white rounded-xl shadow-sm p-6">
            <UserInfoCard user={user} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
