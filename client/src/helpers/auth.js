const authHeader = function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return user.token;
  }
  return null;
};

export default authHeader;
