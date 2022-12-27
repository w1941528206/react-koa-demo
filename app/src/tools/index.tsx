// 判断类型
const isObjectType = (d: any) => Object.prototype.toString.call(d) === '[object Object]';
const isArrayType = (d: any) => Object.prototype.toString.call(d) === '[object Array]';

export const format = (d: any) => {
  if (d && isObjectType(d)) {
    Object.keys(d).forEach((key) => {
      const value = d[key];
      if (isObjectType(value) || isArrayType(value)) format(value);
      if (value === null) delete d[key];
    });
  }
  if (d && isArrayType(d)) {
    d.forEach((i: any, index: number) => {
      if (i === null) d[index] = undefined;
      if (isObjectType(i) || isArrayType(i)) format(i);
    })
  }
  return d;
}