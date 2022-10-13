import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <Link href="/" class="navbar-brand mb-0 h1">
          Navbar
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
