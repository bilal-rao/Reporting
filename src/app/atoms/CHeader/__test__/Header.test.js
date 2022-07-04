import { render, screen, cleanup, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

//Component
import Header from '../index';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);


afterEach(cleanup);

describe('Header Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      global: {
        menu: false,
      },
    });
  });

  it('Render Header component with heading passed as Props', async () => {
    waitFor(() => {
      render(
        <Provider store={store}>
          <Header title="bilal" />
        </Provider>,
      );
      const titleElement = screen.getByText('/bilal/i');
      expect(titleElement).toBeInTheDocument();
    });
  });

  it('Test Header component against snapshot', async () => {
    const { container } = render(
      <Provider store={store}>
        <Header title="bilal" />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
