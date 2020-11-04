import React from "react";
import { render, screen } from "@testing-library/react";
import App from "App";

test("testing", () => {
  render(<App />);
  const linkElement = screen.getAllByTitle("Home");
  expect(linkElement).toBeInTheDocument();
});
