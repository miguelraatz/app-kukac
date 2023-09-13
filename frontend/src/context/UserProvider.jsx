import { useMemo, useState } from "react";
import UserContext from "./UserContext";
import PropTypes from "prop-types";

function UserProvider({ children }) {
  const [user, setUser] = useState("");

  const data = useMemo(() => ({
    user,
    setUser
  }), [user]);

  return (
    <UserContext.Provider value={ data }>
      { children }
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;