import {DiscordLinkIcon} from "./DiscordLinkIcon";
import {QuickstartIcon} from "./QuickStartIcon";
import {RemixDocsIcon} from "./RemixDocsIcon";
import {RemixTutorialIcon} from "./RemixTutorialIcon";

type Resource = {
  href: string;
  text: string;
  Icon: () => JSX.Element;
};

export const resources: Resource[] = [
  {
    href: "https://remix.run/start/quickstart",
    text: "Quick Start (5 min)",
    Icon: QuickstartIcon,
  },
  {
    href: "https://remix.run/start/tutorial",
    text: "Tutorial (30 min)",
    Icon: RemixTutorialIcon,
  },
  {
    href: "https://remix.run/docs",
    text: "Remix Docs",
    Icon: RemixDocsIcon,
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    Icon: DiscordLinkIcon,
  },
];
