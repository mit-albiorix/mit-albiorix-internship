import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
import { useEffect } from "react";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    console.log("login", isAuthenticated);
  }, [isAuthenticated]);
  return (
    <>
      <Header />
      <Counter />
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}
    </>
  );
}

export default App;
