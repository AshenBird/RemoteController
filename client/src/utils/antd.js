export const iconLoader = name => {
  return async () => (await import("@ant-design/icons-vue"))[name];
};
