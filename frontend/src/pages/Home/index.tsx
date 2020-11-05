import React from "react";
import Seo from "components/utils/Seo";
import Nav from "components/organisms/Nav";

export default function Home(): JSX.Element {
  return (
    <>
      <Seo title="Home" />
      <Nav />
      <div>Home</div>
    </>
  );
}
