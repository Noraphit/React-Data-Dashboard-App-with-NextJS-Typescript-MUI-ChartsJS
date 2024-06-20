import Dashboard from "./dashboard/index";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Login from "@/components/Login";
import scss from "./Home.module.scss";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft - Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={scss.main}>
        <Header />
        <SideMenu />
        <Dashboard />
        <Login />
      </main>
    </>
  );
};

export default Home;