import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
  it('component renders', () => {
    render(<Controls />);
  });
  describe('buttons', () => {
    it('provide buttons to toggle the closed and locked states', () => {
      const { getByText } = render(<Controls />);
      getByText(/close gate/i);
      getByText(/lock gate/i);
    });
    it('text changes to reflect the state the door will be in if clicked', () => {
      const { getByText } = render(<Controls closed={true} />);
      getByText(/open gate/i);
    });
    it('the closed toggle button is disabled if the gate is closed', () => {
      const { queryByText } = render(<Controls closed={true} />);
      expect(queryByText(/close gate/i)).toBeNull();
    });
    it('the locked toggle button is disabled if the gate is open', () => {
      const { queryByText } = render(<Controls />);
      expect(queryByText(/lock gate/i).disabled).toBeTruthy();
      expect(queryByText(/lock gate/i).enabled).toBeFalsy();
    });
  });

  describe('Gate', () => {
    it('defaults to unlocked and open', () => {
      const { getByText } = render(<Controls />);
      getByText(/close gate/i);
    });
    it('cannot be closed or opened if it is locked', () => {
      const { getByText, queryByText } = render(
        <Controls closed={true} locked={true} />
      );
      getByText(/unlock gate/i);
      getByText(/open gate/i);
      expect(queryByText(/close gate/i)).toBeNull();
    });
  });
});
