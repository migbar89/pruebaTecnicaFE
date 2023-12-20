import {User, UserInfo} from "../interface/UserInterface.ts";
import axios from "axios";

const UserService = () => {
    const fetchUsers = async (): Promise<User[]> => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=100');
            const users: UserInfo = response.data;
            return users.results;
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw error;
        }
    };
    return {fetchUsers}
}

export  default UserService;