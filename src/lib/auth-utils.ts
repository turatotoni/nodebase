import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

//ovo je kao ako je user ulogiran zelimo tu njegovu sesiju vratit
export const requireAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    return session;
};

//ovaj unAuth je kao ako si vec ulogiran da se nemozes vratiti na login page
export const requireUnauth = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session) {
        redirect("/");
    }
};