import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";
import {$path} from "safe-routes";

export const meta: MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

const Index = () => (
  <div className="flex flex-col gap-4">
    <Link to={$path("/reproduction/bicycle")}>bicycle page</Link>
    <Link to={$path("/reproduction/portfolio")}>portfolio page</Link>
    <Link to={$path("/blog/:articleId", {articleId: 1})}>portfolio page</Link>
    <Link to={$path("/blog/:articleId")}>portfolio page</Link>
  </div>
);

export default Index;
