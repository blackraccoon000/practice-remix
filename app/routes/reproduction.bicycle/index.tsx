import {MetaFunction} from "@remix-run/node";
import {articles} from "./constants";
import {Header} from "./Header";
import {SiteTitle} from "./Header/Bicycle/SiteTitle";
import {NavBar} from "./Header/Bicycle/NavBar";
import {AboutSection} from "./Sections/AboutSection";
import {BicycleSection} from "./Sections/BicycleSection";
import {Footer} from "./Footer";

export const meta: MetaFunction = () => {
  return [
    {title: "Bicycle"},
    {name: "description", content: "Reproduction Bicycle Page"},
  ];
};

/**
 * 模写: https://code-jump.com/demo/html/profile
 */
export const Bicycle = () => {
  return (
    <div className="flex flex-col h-full">
      <Header SiteTitle={SiteTitle} NavBar={NavBar} />
      <main className="w-full flex-grow flex flex-col mb-14 gap-14">
        <img
          className="h-[600px] w-full object-cover max-w-screen-2xl mx-auto"
          src="/bicycle/main-visual.png"
          alt="main"
        />
        <AboutSection
          id="about"
          title="About"
          name="Taro Yamada"
          description={`I'm a web developer living in Tokyo.
I love web technologies and I'm always looking for new things to learn.`}
          image={{
            src: "/bicycle/self-image.png",
          }}
        />
        <BicycleSection id="bicycles" title="Bicycles" articles={articles} />
      </main>
      <Footer />
    </div>
  );
};

export default Bicycle;
