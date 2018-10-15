import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//need to make localStorage a class and actually save data (see Pam's code)
const localStorageMock = {
  getItem: () => jest.fn(),
  setItem: () => jest.fn(),
  clear: () => jest.fn()
};

global.localStorageMock = localStorageMock;

configure({ adapter: new Adapter() });