export const firstDupeIndex = (list) => {
  const dict = {};
  
  for (const [index, value] of list.entries()) {
    if (dict.hasOwnProperty(value)) {
      return dict[value];
    }
  
    dict[value] = index;
  }
  
  return -1;
};