const BASE_URL = "http://localhost:8080";

interface IUser {
  email: string;
  password: string;
}

interface IAuthResponse {
  message: string;
  token: string;
}

export type TAuth = (user: IUser) => Promise<IAuthResponse>;

// auth
export const login: TAuth = async (user) => {
  let status: boolean;
  return fetch(`${BASE_URL}/users/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(user) })
    .then((res) => {
      status = res.ok;
      return res.json();
    })
    .then((json) => {
      if (!status) {
        return Promise.reject(json.details);
      }
      return json;
    });
};

export const signUp: TAuth = async (user) => {
  let status: boolean;
  return fetch(`${BASE_URL}/users/create`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(user) })
    .then((res) => {
      status = res.ok;
      return res.json();
    })
    .then((json) => {
      if (!status) {
        return Promise.reject(json.details);
      }
      return json;
    });
};
