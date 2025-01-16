import React from "react";
import HomePage from "./components/HomePage";

const page = async () => {
  let getData;
  try {
    const res = await fetch(
      "https://www.bakarcompany.somee.com/api/IssueCard/get-card-data"
    );
    if (!res.ok) {
      throw new Error("http request Error");
    }
    const data = await res.json();
    getData = data;
  } catch (error) {
    return <div>please try again after few second</div>;
  }
  if (!getData) {
    return <div>loading....</div>;
  }
  return (
    <div>
        <HomePage data={getData}/>
    </div>
  )
};

export default page;
