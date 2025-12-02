/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shoping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shoping-cart/ItemCounter", () => ({
//   ItemCounter: () => <div data-testid="ItemCounter"/>,
// }));

describe("firstStepsApp", () => {

    afterEach(() =>{
        vi.clearAllMocks();
    });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter Componets", () => {
    render(<FirstStepsApp />);
    const itemCounters = screen.getAllByTestId("ItemCounter");
    expect(itemCounters.length).toBe(3);
    screen.debug();
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith(
        { name: "play station 5", quantity: 5 }
    );
        expect(mockItemCounter).toHaveBeenCalledWith(
        { name: "tv sansung", quantity: 1 }
    );
        expect(mockItemCounter).toHaveBeenCalledWith(
        { name: "laptop lenovo", quantity: 2 }
    );
  });
});
