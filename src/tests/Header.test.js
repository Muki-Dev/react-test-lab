import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("affiche le titre passé en prop", () => {
  render(<Header title="Bienvenue !" />);
  const headerElement = screen.getByText(/Bienvenue !/i);
  expect(headerElement).toBeInTheDocument();
});
