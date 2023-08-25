

const Profile = () => {
    // Retrieve the user payload from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>User Profile</h2>
      {/*Checks if there's a stored used*/}
      {storedUser ? (
        <div>
          <p>Username: {storedUser.username}</p>
          <p>User Type: {storedUser.userType}</p>
        </div>
      ) : (
        <p>No user profile data available.</p>
      )}
    </div>
  )
}

export default Profile;
