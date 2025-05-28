import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders input with placeholder', () => {
    render(<SearchBar onSearch={() => {}} debounceDelay={300} />);
    expect(screen.getByPlaceholderText('Search here...')).toBeInTheDocument();
  });

  it('calls onSearch after debounce delay', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} debounceDelay={300} />);
    const input = screen.getByPlaceholderText('Search here...');

    fireEvent.change(input, { target: { value: 'test' } });

    
    expect(mockOnSearch).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });
});
