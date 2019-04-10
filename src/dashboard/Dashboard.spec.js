// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';


describe('<Dashboard/>', () => {
  it.('shows the controls and display', () => {
    render(<Dashboard/>)
  })
  it('displays renders', () => {
    const { queryByText } = render(<Dashboard  />);
    expect(queryByText(/open/i)).not.toBeNull();
    expect(queryByText(/unlocked/i)).not.toBeNull();
  });
  it('displays renders', () => {
    const { queryByText } = render(<Control  />);
    expect(queryByText(/open/i)).not.toBeNull();
    expect(queryByText(/unlocked/i)).not.toBeNull();
  });

  it('displays closed if the colsed prop is true and open',() => {
    const {queryByText} = render(<Dashboard />);
    expect(queryByText(/closed gate/i)).not.toBeNull()
    expect(queryByText(/lock gate/i)).not.toBeNull()
  })
})