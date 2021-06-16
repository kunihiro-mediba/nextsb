import React from "react";
import { render } from "@testing-library/react";

import { Navigation } from "./Navigation";

describe("Navigation", () => {
    test("render", () => {
        const { asFragment, getByText } = render(<Navigation />);
        expect(asFragment()).toMatchSnapshot();

        getByText("Home");
        getByText("About");
    });
});
