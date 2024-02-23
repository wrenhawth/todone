import { signIn, signOut } from "../../auth"

export function SignIn({
  provider = null,
  ...props
}: { provider: string | null }) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider ?? undefined)
      }}
    >
      <button {...props}>Sign In</button>
    </form>
  )
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <button className="w-full p-0">
        Sign Out
      </button>
    </form>
  )
}