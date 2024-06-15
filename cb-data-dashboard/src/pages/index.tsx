import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
};