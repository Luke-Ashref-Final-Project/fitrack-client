import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";

const SubscribePage = () => {
  const { user } = useContext(AuthContext);
  const [fetchedUsers, setFetchedUsers] = useState(null);

  useEffect(() => {
    if (user) {
      console.log(user._id);
      console.log(user);
      authMethods
        .getAllSubscribers()
        .then((data) => {
          // setFetchedUsers(data);
          console.log(data)
        })
        .catch((err) => {
          console.error("Error fetching subscribers:", err);
        });
    }
  }, [user]);

  return <div>It works! {user?._id}</div>;
};

export default SubscribePage;
