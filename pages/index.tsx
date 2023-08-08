import RootLayout from "@/components/layouts/RootLayout/RootLayout"
import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout"
import Signup from "./auth/signup"

export default function Home() {
  return (
      <AuthLayout>
        <Signup />
      </AuthLayout>
  )
}
