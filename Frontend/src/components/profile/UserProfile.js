import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/authentication/auth.action";

function UserProfile() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const userDetails = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (isLogged) {
      dispatch(getUserDetails());
    }
  }, [dispatch, isLogged]);

  if (!isLogged) return <p>Please log in to view your profile.</p>;

  if (userDetails.loading) return <p>Loading...</p>;
  if (userDetails.error) return <p>Error: {userDetails.error.message}</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <pre>{JSON.stringify(userDetails.data, null, 2)}</pre>
    </div>
  );
}

export default UserProfile;
