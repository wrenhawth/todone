
// import { auth } from "../auth"
// import { SignIn } from "./ui/auth-components"


export default async function Page() {
  // const session = await auth()
  // if (session?.user == null) {
  //   return <SignIn/>
  // }
  return (<main>
    <p>
      Welcome
      {/* Welcome {session?.user?.name}! */}
    </p>
  </main>)
}