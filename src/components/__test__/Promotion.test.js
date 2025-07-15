import { render, screen } from '@testing-library/react';
import Promotion from '../Promotion';

it('renders promo discount amount', () => {
  render(<Promotion />);
  const discountAmount = screen.getByText(/%/i);
  expect(discountAmount).toBeInTheDocument();
});

test('renders promo button correct text', () => {
    render(<Promotion/>);
    const promoButton = screen.getByRole("button")
    expect(promoButton).toHaveTextContent("Reserve Table")
});