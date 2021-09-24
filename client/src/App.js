import './App.css';
import {useEffect, useState} from "react";
import {GET_ALL_USERS} from "./query/user";
import {useQuery} from "@apollo/client";

const App = () => {
    const {data, loading, error} = useQuery(GET_ALL_USERS)
    const [users, setUsers] = useState([])
    console.log(data)
    useEffect(() => {

    }, [data])

    return (
    <div className="App">
      <form>
        <input type="text"/><br/>
        <input type="number"/>

        <div>
          <button>Create user</button>
          <button>Get users</button>
        </div>
      </form>
      <div>
          {users.map(user =>
              <div className="user">{user.id} {user.username} {user.age}</div>
          )}
      </div>
    </div>
  );
}

export default App;
