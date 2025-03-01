import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("affiche le label du bouton", () => {
  render(<Button label="Clique-moi" />);
  const buttonElement = screen.getByText(/Clique-moi/i);
  expect(buttonElement).toBeInTheDocument();
});

test("déclenche la fonction onClick lors du clic", () => {
  const handleClick = jest.fn(); // Mock function
  render(<Button label="Clique-moi" onClick={handleClick} />);
  const buttonElement = screen.getByText(/Clique-moi/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
