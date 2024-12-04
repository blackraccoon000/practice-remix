type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export const DefaultSection = (props: Props) => {
  return (
    <section className="flex flex-col gap-14 items-center">
      <h2
        className="text-4xl font-bold border-b-[1px] border-slate-600"
        id={props.id}
      >
        {props.title}
      </h2>
      {props.children}
    </section>
  );
};
