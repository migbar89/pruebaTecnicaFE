import {User, UserTableRowProps} from "../interface/UserInterface.ts";
import {RiDeleteBinFill} from "react-icons/ri";

const UsersTableRow = (props: UserTableRowProps) => {
    const {user, deleteUser, index} = props
    const renderFullName = (item: User) => {
        return `${item.name.first} ${item.name.last}`
    }

    return (
        <tr>
            <td>{renderFullName(user)}</td>
            <td>{user.location.country}</td>
            <td>{user.email}</td>
            <td><img src={user.picture.thumbnail} alt="Foto de John Doe"/></td>
            <td className="centerButton"><span className="deleteIcon" onClick={() => {
                deleteUser(index)
            }}><RiDeleteBinFill style={{height: "35px", width: "20px"}}/></span></td>
        </tr>)
}

export default UsersTableRow;