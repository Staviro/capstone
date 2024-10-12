import { render, screen } from '@testing-library/react';
import BookingPage from './components/pages/BookingPage';

test("Renders the BookingForm Heading", function() {
  render(<BookingPage />);
  const formHeader = screen.getByText("Reserve a table");
  expect(formHeader).toBeInTheDocument();
})

test("Returns correct initializeTimes", function() {
  render(<BookingPage></BookingPage>);
  const initialTimes = function() {
    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]
  };
})

test("Returns same data after date update", function() {
  render(<BookingPage></BookingPage>);
});