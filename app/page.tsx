'use client'

import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios
    // .get("http://localhost:3000/users/4")
    // .post("http://localhost:3000/users", {name: "Tiko", age:42, salary: 5500000})
    .put("http://localhost:3000/users/4", {name: "Tigran", age:29, salary: 55000000})
    // .delete("http://localhost:3000/users/4")
    .then(res => console.log(res.data))
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}
