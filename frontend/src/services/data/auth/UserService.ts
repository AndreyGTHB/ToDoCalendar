import { SafeUser } from "../../../models/auth/user";
import DataService from "../DataService";

interface UserServiceData {
    user: SafeUser
}

export default class UserService extends DataService<UserServiceData> {}