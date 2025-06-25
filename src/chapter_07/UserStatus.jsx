import useUserState from "./useUserState";

function UserStatus(props) {
    const isOnline = useUserState(props.user.id);

    if (isOnline === null) {
        return '대기중...';
    }

    return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;