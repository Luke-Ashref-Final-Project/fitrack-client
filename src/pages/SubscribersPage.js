import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import authMethods from "../services/auth.service";
import Nav from "../components/Nav";
import CoachDashboard from "../components/CoachDashboard";

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
          console.log("This is the whole data", data);
        })
        .catch((err) => {
          console.error("Error fetching subscribers:", err);
        });
    } else {
      setTheme("cmyk");
    }
  }, [user]);

  return (
    user && (
      <div data-theme={theme}>
        <Nav />
        {user?.userType === "coach" && <CoachDashboard coachId={user._id} />}
        <h1 className="text-3xl py-4">My subscribers</h1>
        <>
          {fetchedUsers &&
            fetchedUsers.subscribersIds.map((item) => {
              return (
                <div className="card w-96 bg-base-100 shadow-xl" key={item._id}>
                  <figure className="px-10 pt-2">
                    {item?.image ? (
                      <img
                        className="rounded-full w-24"
                        src={item.image}
                        alt="profile"
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </figure>
                  <div className="card-body items-center text-center">
                      <h1 className="card-title">{item.username}</h1>
                  </div>
                </div>
              );
            })}
        </>
      </div>
    )
  );
};

export default SubscribePage;
