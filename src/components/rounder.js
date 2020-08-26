import shadower from './shadower';
import ScreenMode from './screenMode';

export default function rounder(size, bac) {
  return {
    width: size,
    height: size,
    borderRadius: size - 5,
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: bac
      ? typeof bac === 'string'
        ? bac
        : 'rgba(34, 0, 0, 0.1)'
      : ScreenMode.bodyBackground,
    justifyContent: 'center',
    ...shadower(1),
  };
}
