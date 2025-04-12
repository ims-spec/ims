import { useEffect, useState } from "react";
import { Link } from "react-router";

export const NotFound = ({ role }: { role: string }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (role === "admin") setUrl("/admin");
    if (role === "profile") setUrl("/profile");
    if (role === "user") setUrl("/");
  }, [role]);

  return (
    <div className="container">
      <h1>Oops :(</h1>
      <h3>Something went wrong</h3>
      <Link to={url}>Go home</Link>
    </div>
  );
};
