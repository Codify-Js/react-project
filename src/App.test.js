import { render, screen } from '@testing-library/react';
import Button from './components/Button/Button.jsx';


test('renders learn react link', () => {
  render(<Button text={'button'} />);
  const linkElement = screen.getByText(/button/i);
  expect(linkElement).toBeInTheDocument();
});
