import React, { useEffect, useState } from "react";
import Card from "../../components/Nav/Card/Card";

import DefaultLayout from "../../layouts/Default";

function index() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <DefaultLayout>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cats.map((cat) => (
            <Card
              id={cat.id}
              name={cat.name}
              image={cat.image}
              phone={cat.phone}
              email={cat.email}
            />
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
}

export default index;
