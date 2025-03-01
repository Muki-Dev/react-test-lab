import { render, screen } from "@testing-library/react";
import App from "./App";

test("affiche le titre du Header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Bienvenue sur Testify React/i);
  expect(headerElement).toBeInTheDocument();
});
