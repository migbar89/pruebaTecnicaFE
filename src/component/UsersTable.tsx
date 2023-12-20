import useUsers from "../hooks/useUsers.ts";
import "../styles/UsersTable.css";
import UsersTableRow from "./UsersTableRow.tsx";

const UsersTable = () => {
    const {users, setUsers, search, setSearch, usersFilter} = useUsers();

    const deleteUser = (index: number) => {
        setUsers((users) => {
            return users?.filter((_, i) => i !== index);
        });
    }

    const getData = () => {
        return search.length === 0 ? users : usersFilter;
    }
    const renderColumHeader = () => {
        return <tr>
            <th className="centered-column">Nombre</th>
            <th className="centered-column">Pais</th>
            <th className="centered-column">Correo</th>
            <th className="centered-column"></th>
            <th>Eliminar</th>
        </tr>
    }
    return (
        <div className="table-container">
            <div>
                <input type="text" value={search} placeholder="Escriba el usuario a buscar"
                       className="text-search"
                       onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    {renderColumHeader()}
                </thead>
                <tbody>
                {
                    users && users.length > 0 ?
                        getData()?.map((user, index) => {
                            return (<UsersTableRow user={user} deleteUser={deleteUser} index={index}/>)
                        }) : null
                }
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable;