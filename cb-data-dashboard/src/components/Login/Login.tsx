import { Avatar } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return <>
      Signed in as {session?.user?.email} <br />
      <p>Welcome {session?.user?.name}</p>
      <Avatar alt={session?.user?.name} src={session?.user?.image} />
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
  </>
};

export default Login;