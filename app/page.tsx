'use client'

import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios
    .get("http://localhost:3000/users")
    .then(res => console.log(res.data))
  }, []);
  
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}
