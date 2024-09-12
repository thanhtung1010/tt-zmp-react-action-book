export const parseImgSrc = (name: string): string => {
  const origin = location.origin;
  const assetPath = '/src/static/svgs/'
  return origin + assetPath + name + '.svg';
}