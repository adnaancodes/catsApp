import { useRouter } from "next/router";
import React from "react";

function Jumbotron() {
  const router = useRouter();

  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Cats World</h1>
        <p class="lead">Adopt a beautiful cat today</p>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => router.push("/cats")}
        >
          Start looking
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
