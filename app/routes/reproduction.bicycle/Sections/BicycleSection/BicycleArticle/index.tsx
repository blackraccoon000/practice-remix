type Props = {
  title: string;
  description: string;
  image: {
    src: string;
    alt?: string;
  };
};

export const BicycleArticle = (props: Props) => {
  return (
    <article className="flex flex-col gap-2 m-5 md:m-0">
      <img src={props.image.src} alt={props.image.alt ?? "自転車の写真"} />
      <h3 className="text-center text-lg font-bold">{props.title}</h3>
      <p className="text-center text-sm font-light">{props.description}</p>
    </article>
  );
};
