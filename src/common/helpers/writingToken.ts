export const writingToken = (token: string) => {
  let date = new Date((Date.now() + 86400e3) * 7);
  document.cookie = `token=${token};secure;samesite=strict;expires="${date}"`;
};
