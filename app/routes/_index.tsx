import type {MetaFunction} from "react-router";
import {Link} from "react-router";

export const meta: MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

const Index = () => (
  <div className="flex flex-col gap-4">
    <Link to={"/reproduction/bicycle"}>bicycle page</Link>
    <Link to={"/reproduction/portfolio"}>portfolio page</Link>
    <Link to={"/blog/1"}>portfolio page</Link>
    <Link to={"/blog/1"}>portfolio page</Link>
  </div>
);

export default Index;
