import { render, screen } from '@testing-library/react';
import App from '../App';
import RenderWrapperTest from './RenderWrapperTest';

describe('App component', () => {
  test('Should be rendereded', () => {
    render(<RenderWrapperTest component={() => <App />} />);

    expect(screen.getByText('TODO LIST')).toBeInTheDocument();
  });
});
