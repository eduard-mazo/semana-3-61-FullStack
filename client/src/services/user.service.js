import authHeader from '../helpers/auth';

export const userLogin = async function userLogin(userData) {
  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  };

  const res = await fetch('http://localhost:3000/api/usuario/login', reqOptions);
  const data = await res.json();

  return new Promise((resolve) => {
    if (data.token) {
      localStorage.setItem('user', JSON.stringify(data));
      resolve(true);
    }

    resolve(false);
  });
};

export const logOut = function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
};

export const addUser = async function addUser(userData) {
  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', token: authHeader() },
    body: JSON.stringify(userData),
  };

  const res = await fetch('http://localhost:3000/api/usuario/add', reqOptions);
  const data = await res.json();

  return new Promise((resolve) => {
    if (data.accessToken) {
      localStorage.setItem('user', JSON.stringify(data));
      resolve(true);
    }

    resolve(false);
  });
};
