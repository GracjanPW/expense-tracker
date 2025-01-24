import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  it('renders text', () => {
    render(<Page />);

    const text = screen.getByText(/Hello World/i);

    expect(text).toBeInTheDocument();
  });
});
