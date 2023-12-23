import { render } from '@testing-library/react';
import DashboardView from '../Pages/Dashboard/DashboardView';

test('renders Dashboard component', () => {
  render(<DashboardView messages={[]} thinking={false} handleSend={() => {}} currentUserData={{ profileimg: 'image.jpg' }} />);
});


