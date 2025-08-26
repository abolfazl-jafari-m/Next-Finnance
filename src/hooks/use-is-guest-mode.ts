import {getCookie} from "cookies-next/client";


export const useIsGuestMode = () => {
    const accessToken = getCookie("access-token");
    const guestMode = !!accessToken && accessToken.startsWith("guest");
    return {guestMode}
}