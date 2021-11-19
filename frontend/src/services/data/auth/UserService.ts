import {LoginUser} from "../../../models/auth/user";


export default class UserService {
    public user: LoginUser | null = null
    public authenticated: boolean = false
}