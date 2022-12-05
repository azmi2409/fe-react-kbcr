import useApi from "./useApi";
import React, { useReducer, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config";

type User = {
  id: string;
  email: string;
  name: string;
  role: string;
  username: string;
};

interface Auth {
  token: string | null;
  user: User | null;
}

export enum AuthActionsKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface Action {
  type: AuthActionsKind;
  payload: any;
}

const authReducer = (state: Auth, action: Action) => {
  switch (action.type) {
    case AuthActionsKind.LOGIN:
      return {
        token: action.payload.token,
        user: action.payload.user,
      };
    case AuthActionsKind.LOGOUT:
      return {
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

const useAuth = () => {
  const data = useMemo(
    () => JSON.parse(localStorage.getItem(config.apiKey) ?? "{}"),
    []
  );
  const navigate = useNavigate();
  const pb: any = useApi();
  const [auth, dispatch] = useReducer(authReducer, {
    token: data?.token || null,
    user: data?.user || null,
  });

  const login = async (email: string, password: string) => {
    try {
      const { token, record: user } = await pb
        .collection("users")
        .authWithPassword(email, password);
      if (token) {
        pb.authStore.saveRecord(user, token);
        dispatch({
          type: AuthActionsKind.LOGIN,
          payload: {
            token,
            user,
          },
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    pb.authStore.clear();
    dispatch({ type: AuthActionsKind.LOGOUT, payload: null });
  };

  return {
    auth,
    login,
    logout,
  };
};

export default useAuth;
