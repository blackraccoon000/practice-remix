type Props = {
  SiteTitle: () => JSX.Element;
  NavBar: () => JSX.Element;
};

export const Header = (props: Props) => {
  const {SiteTitle, NavBar} = props;
  return (
    <div className="mx-auto max-w-4xl w-full">
      <header className="flex justify-between items-center mx-5 md:mx-0">
        <SiteTitle />
        <NavBar />
      </header>
    </div>
  );
};
