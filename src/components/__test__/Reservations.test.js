import { render, screen } from '@testing-library/react';
import Reservations from '../Reservations'

test('renders the heading text "Book A Table', () => {
  render(<Reservations />);
  const reservationHeading = screen.getByText(/Book A Table/i);
  expect(reservationHeading).toBeInTheDocument();
});

test('Shows opening times', () => {
    render(<Reservations />);
    const openingTimes = screen.getByText(/opening hours/i);
    expect(openingTimes).toBeInTheDocument();
  });

test('renders Reservation button wtih correct text', () => {
    render(<Reservations/>);
    const confirmReservation = screen.getByRole("button")
    expect(confirmReservation).toHaveTextContent("Confirm Order")
});

test('renders five input elements', () => {
    render(<Reservations/>);
    const bookingInputs = screen.getAllByRole("combobox")
    expect(bookingInputs.length).toBe(4);
});

test('shows option to choose reservation date', () => {
    render(<Reservations />);
    const selectDate = screen.getByText(/select date/i);
    expect(selectDate).toBeInTheDocument();
});