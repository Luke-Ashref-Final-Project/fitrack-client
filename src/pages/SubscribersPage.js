import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";

const SubscribePage = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [fetchedUsers, setFetchedUsers] = useState(null);
  const [theme, setTheme] = useState("cmyk");

  useEffect(() => {
    if (user && user.userType === "coach") {
      setTheme("night");
      authMethods
        .getAllSubscribers()
        .then((data) => {
          setFetchedUsers(data);
          console.log("This is te whole data", data);
        })
        .catch((err) => {
          console.error("Error fetching subscribers:", err);
        });
    } else {
      setTheme("cmyk");
    }
  }, [user]);

  return (
    isLoggedIn && (
      <div data-theme={theme}>
        <Nav />
        <h1 className="text-3xl"> It works!</h1>
        <></>
        {fetchedUsers &&
          fetchedUsers.subscribersIds.map((item) => {
            return (
              <div key={item._id}>
                <h1>{item.username}</h1>
              </div>
            );
          })}
      </div>
    )
  );
};

export default SubscribePage;
