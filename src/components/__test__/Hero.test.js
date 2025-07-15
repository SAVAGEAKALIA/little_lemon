import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

it(' should render subheading text', () => {
  render(<Hero />);
  const subheadingText = screen.getByText(/chicago/i);
  expect(subheadingText).toBeInTheDocument();
});

it(' should render the heading text', () => {
    render(<Hero />);
    const headingText = screen.getByRole("heading", { name: "Little Lemon"});
    expect(headingText).toBeInTheDocument();
});

// USING FINDBY WITH AWAIT
// it(' should render subheading text', async () => {
//     render(<Hero />);
//     const subheadingText = await screen.findByText(/chicago/i);
//     expect(subheadingText).toBeInTheDocument();
// });

it(' should render only two heading', () => {
    render(<Hero />);
    const headingTexts = screen.getAllByRole("heading");
    expect(headingTexts.length).toBe(2);
});