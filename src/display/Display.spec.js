// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Dispaly/>', () => {
  render(<Display />);

  it('displays if gate is open/closed and if it is locked/unlocked', () => {
    const { getByText } = render(<Display />);
    getBytext(/unlocked/i);
    getByText(/open/i);
  });

  discribe(
    'displays Closed if the closed prop is true and Open if otherwise',
    () => {
      it('closed prop true', () => {
        const { getByText } = render(<Display closed={true} />);
        getBytext(/closed/i);
      });
      it('closed prop undefined', () => {
        const { queryByText } = render(<Display />);
        expect(queryBytext(/closed/i)).toBeNull;
      });
    }
  );

  discribe(
    'displays Locked if the locked prop is true and Unlocked if otherwise',
    () => {
      it('locked prop true', () => {
        const { getByText } = render(<Display locked={true} />);
        getBytext(/locked/i);
      });
      it('closed prop undefined', () => {
        const { queryByText } = render(<Display />);
        expect(queryBytext(/locked/i)).toBeNull;
      });
    }
  );

  discribe('color classed', () => {
    discribe('when locked or closed use the red-led class', () => {
      it('when locked use the red-led class', () => {
        const { queryByText } = render(<Display locked={true} />);
        expect(queryByText(/locked/i).className).toContain('red-led');
      });

      it('when locked use the red-led class', () => {
        const { queryByText } = render(<Display locked={true} />);
        expect(queryByText(/closed/i).className).toContain('red-led');
      });
    });

    discribe('when unlocked or open use the green-led class', () => {
      it('when locked use the green-led class', () => {
        const { queryByText } = render(<Display locked={true} />);
        expect(queryByText(/unlocked/i).className).toContain('red-led');
      });

      it('when locked use the green-led class', () => {
        const { queryByText } = render(<Display locked={true} />);
        expect(queryByText(/open/i).className).toContain('red-led');
      });
    });
  });
});
