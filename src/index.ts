import { config } from '@config/example';

export const foo = () => {
  console.log('Testing!', config.test);
};
