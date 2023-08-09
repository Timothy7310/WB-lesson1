export const nameValidation = (name) => {
  const nameWithoutSpace = name.replace(/\s/gm, "");
  // можно только пробелы и буквы латиницы и кириллицы, а также дефис
  const reg = /^[a-zA-Zа-яА-Я-]+$/;
  const isCorrect = reg.test(nameWithoutSpace);
  return isCorrect;
};
