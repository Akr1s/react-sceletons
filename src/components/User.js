import React, { useEffect, useState } from "react";
import SceletonProfile from "../skeletons/SceletonProfile";
import { useTheme } from "./ThemeProvider";

function User() {
  const [profile, setProfile] = useState(null);
  const [theme] = useTheme();

  useEffect(() => {
    const loadUser = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await result.json();
      setProfile(data);
    };
    loadUser();
  }, []);

  return (
    <div className="user">
      <h2>User details</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>profile.website</a>
        </div>
      )}

      {!profile && <SceletonProfile theme={theme} />}
    </div>
  );
}

export default User;
