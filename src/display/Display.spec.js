import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display/>', () => {
  it('component renders', () => {
    render(<Display />);
  });
  it('displays if gate is open/closed and if it is locked/unlocked', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
  });
  describe('displays Closed if the closed prop is true and Open if otherwise', () => {
    it('closed prop true', () => {
      const { getByText } = render(<Display closed={true} />);
      getByText(/closed/i);
    });
    it('closed prop undefined', () => {
      const { queryByText } = render(<Display />);
      expect(queryByText(/closed/i)).toBeNull();
    });
  });
  describe('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
    it('locked prop true', () => {
      const { getByText } = render(<Display locked={true} />);
      getByText(/locked/i);
    });
    it('locked prop undefined', () => {
      const { queryByText } = render(<Display />);
      expect(queryByText(/^locked/i)).toBeNull();
    });
  });
  describe('color classes', () => {
    describe('when locked or closed use the red-led class', () => {
      it('when locked use the red-led class', () => {
        const { queryByText } = render(<Display locked={true} />);
        expect(queryByText(/locked/i).className).toContain('red-led');
      });
      it('when closed use the red-led class', () => {
        const { queryByText } = render(<Display closed={true} />);
        expect(queryByText(/closed/i).className).toContain('red-led');
      });
    });
    describe('when unlocked or open use the green-led class', () => {
      it('when unlocked use the green-led class', () => {
        const { queryByText } = render(<Display />);
        expect(queryByText(/unlocked/i).className).toContain('green-led');
      });
      it('when open use the green-led class', () => {
        const { queryByText } = render(<Display />);
        expect(queryByText(/open/i).className).toContain('green-led');
      });
    });
  });
});
