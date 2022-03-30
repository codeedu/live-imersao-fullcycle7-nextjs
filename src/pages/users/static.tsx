import axios from "axios";
import {  GetStaticProps, NextPage } from "next";

type User = {
  name: string;
};

type UserPageProps = {
  users: User[];
  date: string;
};

const url = "https://my-json-server.typicode.com/codeedu/live-imersao-fullcycle7-nextjs/users"

const UsersStaticPage: NextPage<UserPageProps> = (props) => {
  const { users, date } = props;

  return (
    <div>
      <h1>UsersStaticPage - {date}</h1>
      <ul>
        {users.map((user: any, key) => (
          <li key={key}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersStaticPage;

//export const getStaticPaths = async () => {
  // quais ID vão ser gerados no build
  //API dos 100 mais acessados 
//}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(url);

  return {
    props: {
      users: data,
      date: new Date().getTime()
    },
    revalidate: 10
  };
};


// /users/static -> users, 10s

// /users/static/[ID]

