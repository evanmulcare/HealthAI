import { render } from '@testing-library/react';
import AllPatientsScreenView from '../Pages/AllPatients/AllPatientsScreenView';

test('renders all patients View component', () => {
  render(<AllPatientsScreenView filteredPatients={[]} />);
});
