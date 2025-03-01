import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('affiche le titre passè en prop', () => {
	render(<Header title='Bienvenue !' />);
	const headerElement = screen.getByText(/Bienvenu/i);
	expect(headerElement).toBeInTheDocument();
});