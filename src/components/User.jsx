import { useEffect, useState } from "react";
import React, { useLayoutEffect } from "react";

const User = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#1A2430";
  });
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.log(err));
  };
  console.log(user);
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="text-light">
      <h1 className="font-monospace">
        {user?.name?.first} {user?.name?.last}
      </h1>
      <img className="rounded-circle my-3" src={user?.picture?.large} alt="" />
      <h4 className="fw-bold fs-5 text-dark bg-warning rounded">
        {user?.email}
      </h4>
      <h5 className="my-2">{user?.phone}</h5>
      <p>{new Date(user?.dob?.date).toLocaleDateString()}</p>
      <button onClick={() => getUser()} className="btn btn-warning">
        Get User
      </button>
    </div>
  );
};

export default User;
