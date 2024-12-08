import {
  Form,
  // useMatches,
  // createSearchParams,
  // data,
  // useRouteError,
  // useSearchParams,
  type MetaFunction,
} from "react-router";
// useLoaderData, useParams
// import {articles} from "./constants";
import {Header} from "./Header";
import {SiteTitle} from "./Header/SiteTitle";
import {NavBar} from "./Header/NavBar";
// import {AboutSection} from "./Sections/AboutSection";
// import {BicycleSection} from "./Sections/BicycleSection";
import {Footer} from "./Footer";
import type {Route} from "./+types/route";

export type SearchParams = {
  view: "list" | "grid";
  sort?: "date" | "views";
  page?: number;
};

export const meta: MetaFunction = () => {
  return [
    {title: "MY Works - Portfolio Page"},
    {name: "description", content: "Portfolio Page"},
  ];
};

type Person = {
  id: number;
  firstName: string;
  lastName: string;
};

const persons: Person[] = [];

export const loader = async (args: Route.LoaderArgs) => {
  const url = new URL(args.request.url);
  const searchParams = Object.fromEntries(
    url.searchParams.entries()
  ) as unknown as SearchParams;

  return {...args, searchParams, persons};
};

export const handle = {
  breadcrumb: () => {
    return <div>breadcrumb</div>;
  },
};

export const action = async ({request}: Route.ActionArgs) => {
  const formData = await request.formData();
  const {_action, ...value} = Object.fromEntries(formData);
  console.log({_action, value});

  if (_action === "create") {
    const maybeParson = value as unknown as Omit<Person, "id">;
    const data = {
      id: persons.length + 1,
      ...maybeParson,
    };
    console.log({data});

    persons.push(data);
  }

  if (_action === "delete") {
    const maybeId = value.id as unknown as number;
    const index = persons.findIndex(({id}) => id === maybeId);
    persons.splice(index, 1);
  }

  return {persons};
};

/**
 * 模写: https://code-jump.com/demo/html/portfolio1/
 */
const Portfolio = (props: Route.ComponentProps) => {
  // useEffect(() => {
  //   console.log({props});
  // }, [props]);

  return (
    <div className="flex flex-col h-full">
      <Header SiteTitle={SiteTitle} NavBar={NavBar} />
      <main className="w-full flex-grow flex flex-col mb-14 gap-14">
        <ul>
          {props.loaderData.persons.map(({id, firstName, lastName}) => {
            return (
              <li key={id} className="flex gap-2 text-black">
                <div>{id}</div>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <Form method="post">
                  <button type="submit" name="_action" value="delete">
                    [x]
                  </button>
                </Form>
              </li>
            );
          })}
        </ul>
        <Form method="post">
          <input type="text" name="firstName" className="border border-black" />
          <input type="text" name="lastName" className="border border-black" />
          <button type="submit" name="_action" value="create">
            add
          </button>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
