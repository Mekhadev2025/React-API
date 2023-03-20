import "./UserData.css"

const UserData = ({users}) => {
  return (
    <>
      {users.map((user) => {
        const {id, name, email, address} = user;
        if (id % 2 === 0) {
          return (
            <tr key={id}>
              <td className="gray">{id}</td>
              <td className="gray">{name}</td>
              <td className="gray">{email}</td>
              <td className="gray">{address.city}</td>
            </tr>
          );
        } else {
          return (
            <tr key={id}>
              <td className="white">{id}</td>
              <td className="white">{name}</td>
              <td className="white">{email}</td>
              <td className="white">{address.city}</td>
            </tr>
          );
        }
      })}
    </>
  );
}

export default UserData;
