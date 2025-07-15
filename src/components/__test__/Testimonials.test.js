import { render, screen } from '@testing-library/react';
import Testimonials from '../Testimonials';

test('renders renders the heading text "Testimonials', () => {
  render(<Testimonials />);
  const specialsHeading = screen.getByText(/testimonials/i);
  expect(specialsHeading).toBeInTheDocument();
});

test('Renders 3 review cards', () => {
    render(<Testimonials />);
    const orderDelivery = screen.getAllByTitle("review-cards");
    expect(orderDelivery.length).toBe(3);
});