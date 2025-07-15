import { render, screen } from '@testing-library/react';
import App from './App';

it('should render correct number of buttons', () => {
    render(<App />);
    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBe(6);
});