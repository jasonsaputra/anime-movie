import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export const authUserSession = async () => {
    try {
        // console.log("Auth Option: ", authOption);
        const session = await getServerSession(authOption);
        // console.log("Session Retrieved: ", session);
        return session?.user;
    } catch (error) {
        console.error("Error in authUserSession: ", error);
        throw error;
    }
  };