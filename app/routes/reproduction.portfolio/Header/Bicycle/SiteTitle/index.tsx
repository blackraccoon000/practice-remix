import {Link} from "@remix-run/react";

export const SiteTitle = () => {
  return (
    <h1 className="w-[120px] py-2">
      <Link to="/">
        <img src="/bicycle/profile-logo.png" alt="profile-logo" />
      </Link>
    </h1>
  );
};
