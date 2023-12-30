import React, { useEffect } from "react";
import { message } from "antd";
import { GetCurrentUser } from "../apicalls/users";
function ProctectedPage({ children }) {
  const [user, setUser] = React.useState(null);

  const validateToken = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        setUser(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    validateToken();
  }, []);

  return (
    <div>
      {user && (
        <div className="p-5">
          {user.name}
          {children}
        </div>
      )}
    </div>
  );
}

export default ProctectedPage;