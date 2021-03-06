import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <h3>Google Books Lookup</h3>
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>
      <a className="navbar-brand" href="/">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
