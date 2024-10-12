import { render, screen } from '@testing-library/react';
import BookingPage from './components/pages/BookingPage';

test("Renders the BookingForm Heading", function() {
  render(<BookingPage />);
  const formHeader = screen.getByText("Reserve a table");
  expect(formHeader).toBeInTheDocument();
});

test("Form has date field", function() {
  render(<BookingPage></BookingPage>);
  const date = screen.getByTestId("date")
  expect(date).toBeInTheDocument();
});