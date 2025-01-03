import Link from "next/link";
import { authUserSession } from "@/services/auth-services";

const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
      <div className="flex justify-between items-center gap-4 relative">
        {
          user ? <Link href="/users/dashboard" className="text-color-primary py-1">Dashboard</Link> : null
        }
        <Link href={actionURL} className="bg-color-dark text-color-accent text-sm font-bold py-2 px-4 rounded-md min-w-[90px] text-center">{actionLabel}</Link>
      </div>
  );
};

export default UserActionButton;