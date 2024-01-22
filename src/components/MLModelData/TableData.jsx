import {useEffect, useState} from "react";
import UserData from "./UserData.jsx";
import "./TableData.css";

const API = "https://jsonplaceholder.typicode.com/users";

const TableData = (key) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
                <th>Index</th>
                <th>Model Name</th>
                <th>Model Details</th>
            </tr>
            </thead>
            <tbody>
            {/* <UserData users={users}/> */}
            <tr>
                <td>1</td>
                <td>Random Forest</td>
                <td>Model uploaded on: 07/23/2023
                    Active: Yes <br></br>
                    Deployed on: 07/23/2023
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>KNN</td>
                <td>Model uploaded on: 07/23/2023
                    Active: Yes <br></br>
                    Deployed on: 07/23/2023
                </td>
            </tr>
            </tbody>
        </table>
    </>
}

export default TableData;
