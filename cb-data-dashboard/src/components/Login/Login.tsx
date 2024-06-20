import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return <>
      <Button variant={'contained'} color={"error"} onClick={() => signOut()}>Sign Out</Button>
    </>
  }
  return <>
    <h2>Please log in</h2> <br />
    <Button variant={'contained'} color={"success"} onClick={() => signIn()}>Sign in</Button>
  </>
};

export default Login;