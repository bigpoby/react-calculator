import { useEffect, useState } from "react";

function useUserState(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        }
    })

    return isOnline;
}

export default useUserState;