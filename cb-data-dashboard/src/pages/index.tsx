import { Inter } from "next/font/google";
import Dashboard from "./dashboard/index";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Login from "@/components/Login/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <SideMenu />
      <Dashboard />
      <Login />
    </>
  );
};
