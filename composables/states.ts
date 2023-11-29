import type { User } from "~/types/user";
import { DEFAULT_AVATAR } from "~/utils/common/constant";

const useUserData = () => {
    const userData = useState<User>('user', () => ({
        displayName: '',
        email: '',
        photoURL: DEFAULT_AVATAR,
    }));

    const setUserData = (user: User) => {
        userData.value = user
    }
    return [userData, setUserData];
}
export default useUserData
