import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./itemCounter";

describe("itemCounter", () => {
  test("should render with defauld values", () => {
    const name = "Test item";

    render(<ItemCounter name={name} />);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Test item";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count +1 button is pressed", () => {
    render(<ItemCounter name={"Test item"} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole("button");
    //console.log(buttonAdd.innerHTML); // muestra el contenido de la etiqueta html
    fireEvent.click(buttonAdd);
    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count -1 button is pressed", () => {
    const quantity = 5;
    render(<ItemCounter name={"Test item"} quantity={quantity} />);

    const [, buttonSubstract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubstract);
    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count -1 button is pressed and quantity is 1", () => {
    const quantity = 1;
    render(<ItemCounter name={"Test item"} quantity={quantity} />);

    const [, buttonSubstract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubstract);
    expect(screen.getByText("1")).toBeDefined();
  });

  test("should change to read when count is equal 1", () => {
    const quantity = 1;
    const name = "Test item";
    render(<ItemCounter name={name} quantity={quantity} />);
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('red');
  });

    test("should change to black when count is greater thet 1", () => {
    const quantity = 2;
    const name = "Test item";
    render(<ItemCounter name={name} quantity={quantity} />);
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('black');
  });
});
