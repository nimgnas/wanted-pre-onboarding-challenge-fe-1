const BASE_URL = "http://localhost:8080";

interface IUser {
  email: string;
  password: string;
}

interface IAuthResponse {
  message: string;
  token: string;
}

interface ITodo {
  title: string;
  content: string;
}

interface ITodoResponse {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type TAuth = (user: IUser) => Promise<IAuthResponse>;
type TGetTodos = (token: string) => Promise<ITodoResponse[]>;
type TGetTodoById = (data: { todoId: string; token: string }) => Promise<ITodoResponse>;
type TCreateTodo = (data: { todo: ITodo; token: string }) => Promise<ITodoResponse>;
type TUpdateTodo = (data: { todoId: string; todo: ITodo; token: string }) => Promise<ITodoResponse>;
type TDeleteTodo = (data: { todoId: string; token: string }) => Promise<ITodoResponse>;

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
      return { message: json.message, token: json.token };
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
      return { message: json.message, token: json.token };
    });
};

// Todos
export const getTodos: TGetTodos = async (token) => {
  let status: boolean;
  return fetch(`${BASE_URL}/todos`, { method: "GET", headers: { Authorization: token } })
    .then((res) => {
      status = res.ok;
      return res.json();
    })
    .then((json) => {
      if (!status) {
        return Promise.reject(json.details);
      }
      return json.data;
    });
};

export const getTodoById: TGetTodoById = async ({ todoId, token }) => {
  let status: boolean;
  return fetch(`${BASE_URL}/todos/${todoId}`, { method: "GET", headers: { Authorization: token } })
    .then((res) => {
      status = res.ok;
      return res.json();
    })
    .then((json) => {
      if (!status) {
        return Promise.reject(json.details);
      }
      return json.data;
    });
};

export const createTodo: TCreateTodo = async ({ todo, token }) => {
  let status: boolean;
  return fetch(`${BASE_URL}/todos`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: token }, body: JSON.stringify(todo) })
    .then((res) => {
      status = res.ok;
      return res.json();
    })
    .then((json) => {
      if (!status) {
        return Promise.reject(json.details);
      }
      return json.data;
    });
};

export const updateTodo: TUpdateTodo = async ({ todoId, todo, token }) => {
  let status: boolean;
  return fetch(`${BASE_URL}/todos/${todoId}`, { method: "PUT", headers: { "Content-Type": "application/json", Authorization: token }, body: JSON.stringify(todo) })
    .then((res) => {
      status = res.ok;
      return res.json();
    })
    .then((json) => {
      if (!status) {
        return Promise.reject(json.details);
      }
      return json.data;
    });
};

export const deleteTodo: TDeleteTodo = async ({ todoId, token }) => {
  let status: boolean;
  return fetch(`${BASE_URL}/todos/${todoId}`, { method: "DELETE", headers: { Authorization: token } })
    .then((res) => {
      status = res.ok;
      return res.json();
    })
    .then((json) => {
      if (!status) {
        return Promise.reject(json.details);
      }
      return json.data;
    });
};
