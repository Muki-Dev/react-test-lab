import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Affiche le label du bouton', () => {
	render(<Button label='clique-moi' />);
	const buttonElement = screen.getByText(/Clique-moi/i);
	expect(buttonElement).toBeInTheDocument();
});