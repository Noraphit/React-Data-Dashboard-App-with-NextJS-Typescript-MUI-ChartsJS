import Dashboard from "./dashboard/index";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Login from "@/components/Login";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
};
