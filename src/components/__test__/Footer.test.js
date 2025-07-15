import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('footer contains an image', () => {
    render(<Footer />);
    const footerImg = screen.getByRole("img")
    expect(footerImg).toBeInTheDocument()
});

test('renders "Doormant Links"', () => {
    render(<Footer />);
    const doormantLinks = screen.getByText("Doormant Navigation");
    expect(doormantLinks).toBeInTheDocument();
});

test('renders "Contacts"', () => {
    render(<Footer />);
    const contactLinks = screen.getByText("Contact");
    expect(contactLinks).toBeInTheDocument();
});

// test('renders "Social Media Links"', () => {
//     render(<Footer />);
//     const socialLinks = screen.getByText("Social Media");
//     expect(socialLinks).toBeInTheDocument();
// });