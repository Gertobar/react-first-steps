import type { CSSProperties } from "react";

const firstName = "German";
const lastName = "Tobar";
const favoriteSoccerTeams = ["barcelona", "psg", "arsenal"];
const isactive = true;
const address = {
  zipCode: "2345223",
  country: "guachapala",
};
const myStiles: CSSProperties = {
  backgroundColor: "darkgray",
  borderRadius: isactive ? 10 : 20,
  padding: 10,
  marginTop:30,
};

export const MyAwesomeApp = () => {
  return (
    <div>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
      <p className="my-favorite-class">{favoriteSoccerTeams.join(", ")}</p>
      <p>{2 + 2}</p>
      <p>{isactive ? "active" : "inactive"}</p>
      <p style={myStiles}>{JSON.stringify(address)}</p>
    </div>
  );
};
