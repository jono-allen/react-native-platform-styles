import * as React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';
import { Platform } from 'react-native';

describe('Button', () => {
  afterEach(() => jest.resetModules());

  describe('on default platform', () => {
    beforeAll(() => {
      jest.mock('react-native', () => {
        const RN = jest.requireActual('react-native');

        RN.Platform = () => ({
          select: (objs) => objs.default,
        });

        return RN;
      });
    });

    it('it is android', () => {
      Platform.OS = 'default';
      expect(Platform.OS).toEqual('default');
    });

    it('it renders correctly', () => {
      Platform.OS = 'default';

      console.log(Platform.OS);

      const tree = renderer.create(<Button>Default Button</Button>).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
  describe('on ios platform', () => {
    beforeAll(() => {
      jest.mock('react-native', () => {
        const RN = jest.requireActual('react-native');

        RN.Platform = () => ({
          select: (objs) => objs.ios,
          OS: 'default',
        });

        return RN;
      });
    });

    it('it is ios', () => {
      expect(Platform.OS).toEqual('ios');
    });

    it('it renders correctly', () => {
      Platform.OS = 'ios';
      const tree = renderer.create(<Button>IOS Button</Button>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
