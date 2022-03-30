import { useRouter } from "next/router";

const UserGetPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>UserGetPage {id}</h1>;
};

export default UserGetPage;

// /users/123?param1=value1&param2=value2
