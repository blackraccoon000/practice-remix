import type {MetaFunction} from "react-router";
import {Link} from "react-router";
import {$path} from "safe-routes";

export const meta: MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

const Index = () => (
  <div className="flex flex-col gap-4">
    <Link to={"/reproduction/bicycle"}>bicycle page</Link>
    <Link
      to={$path("/reproduction/portfolio", {
        view: "list",
      })}
    >
      portfolio page
    </Link>
    <Link
      to={$path("/", {
        articleId: "1",
      })}
    >
      portfolio page
    </Link>
  </div>
);

export default Index;
