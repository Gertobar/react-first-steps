import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("shuld render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    screen.debug();

    const h1 = container.querySelector("h1");
    const h2 = container.querySelector("h2");

    expect(h1?.innerHTML).toBe("German"); //busca el contenido del componete h1 sea identico
    expect(h2?.innerHTML).toContain("Tobar"); //busca que el componete contenga na coinsidencia
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });
});
