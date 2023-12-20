import UserService from "../services/UserService.ts";
import {useEffect, useState} from "react";
import {User} from "../interface/UserInterface.ts";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>()
    const [search, setSearch] = useState("")
    const [usersFilter, setUserFilter] = useState<User[]>()
    const {fetchUsers} = UserService();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        console.log("Efecto ejecutado");

        fetchUsers().then((users) => {
            setUsers(users);
        })
    }, []);
    useEffect(() => {
        if(search.length>0){
            filterUsers();
        }
    }, [search]);
    const filterUsers = () => {
        const lowercasedFilter = search.toLowerCase();

        const dataFilter =  users?.filter((user) => {
            const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
            const country = user.location.country.toLowerCase();
            const email = user.email.toLowerCase();

            return fullName.includes(lowercasedFilter) || country.includes(lowercasedFilter) || email.includes(lowercasedFilter);
        });

        setUserFilter(dataFilter)
    };
    return {users, setUsers, search, setSearch, usersFilter, setUserFilter}
}

export default useUsers;
