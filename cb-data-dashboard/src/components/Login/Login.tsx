import { Avatar } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const userProfileImg = session?.user?.image as string;

  if (session) {
    return <>
      Signed in as {session?.user?.email} <br />
      <p>Welcome {session?.user?.name}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
  </>
};

export default Login;