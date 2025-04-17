import { useAuth } from "@/store/useAuth";
import React from "react";

type TStyle = {
  width: number;
  height: number;
  ibjectFit: string;
};

interface IAvatar {
  src: string;
  alt: string | undefined;
  size?: number;
  style?: TStyle;
}

export const AvatarLayout: React.FC<IAvatar> = ({ src, size }) => {
  const { logout } = useAuth();

  return (
    <>
      <div
        className="rounded-circle"
        style={{
          border: "2.5px solid black",
          padding: "1px",
        }}
      >
        <div className="dropdown">
          <button
            className="btn btn-secondary rounded-circle border"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: size,
              height: size,
              border: "none",
              color: "white",
            }}
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2 d-flex">
            <li className="me-3">
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li className="me-3">
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li className="me-3">
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
            <li>
              <hr />
            </li>
            <li className="text-center mt-3 ">
              <button className="btn btn-link fs-5" onClick={logout} style={{textDecoration:'none', color:'black',}}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
