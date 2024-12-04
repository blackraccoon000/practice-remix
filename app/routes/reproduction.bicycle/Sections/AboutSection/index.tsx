import {ComponentPropsWithRef} from "react";
import {DefaultSection} from "../DefaultSection";

type DefaultSectionProps = Omit<
  ComponentPropsWithRef<typeof DefaultSection>,
  "children"
>;

type Props = {
  name: string;
  description: string;
  image: {
    src: string;
    alt?: string;
  };
} & DefaultSectionProps;

export const AboutSection = (props: Props) => {
  return (
    <DefaultSection title={props.title} id={props.id}>
      <div className="flex gap-7 items-center md:items-start md:w-1/2 flex-col md:flex-row">
        <img
          src={props.image.src}
          alt={props.image.alt ?? "プロフィール写真"}
          className="rounded-full w-24 h-24"
        />
        <div className="mx-5 md:mx-0">
          <h3 className="text-lg font-bold">{props.name.toUpperCase()}</h3>
          <p className="break-words whitespace-pre-wrap">{props.description}</p>
        </div>
      </div>
    </DefaultSection>
  );
};
