//import { useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

type User = {
  name: string;
};

type UserPageProps = {
  users: User[];
};

const url = "https://my-json-server.typicode.com/codeedu/live-imersao-fullcycle7-nextjs/users"

const UsersPage: NextPage<UserPageProps> = (props) => {
  const { users } = props;
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((response) => setUsers(response.data));
  // }, []);

  return (
    <div>
      <h1>UsersPage</h1>
      <ul>
        {users.map((user: any, key) => (
          <li key={key}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(url);
  
  return {
    props: {
      users: data,
    },

  };
};
