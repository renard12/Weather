/**
 * Unit tests for Button component
 * Testing component rendering, props, and interactions
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button/Button';

describe('Button Component', () => {
  it('should render button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('should apply correct variant classes', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600');

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-200');

    rerender(<Button variant="ghost">Ghost</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('text-gray-700');

    rerender(<Button variant="danger">Danger</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-600');
  });

  it('should apply correct size classes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('text-sm');

    rerender(<Button size="md">Medium</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('text-base');

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('text-lg');
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should show loading state', () => {
    render(<Button isLoading>Loading</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Check for spinner SVG
    const spinner = button.querySelector('svg.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with left icon', () => {
    const Icon = () => <span data-testid="left-icon">←</span>;
    render(<Button leftIcon={<Icon />}>With Icon</Button>);

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  it('should render with right icon', () => {
    const Icon = () => <span data-testid="right-icon">→</span>;
    render(<Button rightIcon={<Icon />}>With Icon</Button>);

    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Button className="custom-class">Custom</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should forward other props', () => {
    render(
      <Button data-testid="custom-button" aria-label="Custom button">
        Button
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-testid', 'custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom button');
  });
});
