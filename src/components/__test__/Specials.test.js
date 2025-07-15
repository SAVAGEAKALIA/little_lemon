import { render, screen } from '@testing-library/react';
import Specials from '../Specials';

test('renders promo discount amount', () => {
  render(<Specials />);
  const specialsHeading = screen.getByText(/specials/i);
  expect(specialsHeading).toBeInTheDocument();
});

test('renders promo button correct text', () => {
    render(<Specials/>);
    const specialsButton = screen.getAllByText("Online Menu")
    expect(specialsButton.length).toBe(2)
});

test('Renders 3 card elements with "order a delivery" text', () => {
    render(<Specials />);
    const orderDelivery = screen.getAllByText(/Order a delivery/i);
    expect(orderDelivery.length).toBe(3);
});