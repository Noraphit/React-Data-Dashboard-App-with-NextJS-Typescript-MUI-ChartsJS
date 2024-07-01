import Dashboard from "./dashboard/index";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import scss from "./Home.module.scss";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <main className={scss.main}>
        <Dashboard />
        <Login />
      </main>
    </>
  );
};

export default Home;