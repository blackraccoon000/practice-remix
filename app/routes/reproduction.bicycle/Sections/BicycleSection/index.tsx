import type {ComponentPropsWithRef} from "react";
import {DefaultSection} from "../DefaultSection";
import {BicycleArticle} from "./BicycleArticle";

type DefaultSectionProps = Omit<
  ComponentPropsWithRef<typeof DefaultSection>,
  "children"
>;
type Articles = ComponentPropsWithRef<typeof BicycleArticle>[];

type Props = {
  articles: Articles;
} & DefaultSectionProps;

export const BicycleSection = (props: Props) => {
  return (
    <DefaultSection title={props.title} id={props.id}>
      <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl">
        {props.articles.map((article, index) => (
          <BicycleArticle key={index} {...article} />
        ))}
      </div>
    </DefaultSection>
  );
};
