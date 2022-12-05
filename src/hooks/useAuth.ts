import useApi from "./useApi";
import React, { useReducer, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { TbToolsKitchen } from "react-icons/tb";

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
        model: null,
      };
    default:
      return state;
  }
};

const useAuth = () => {
  const navigate = useNavigate();
  const pb: any = useApi();
  const [auth, dispatch] = useReducer(authReducer, {
    token: pb.authStore.token || null,
    user: pb.authStore.record || null,
  });
  const firstLoad = React.useRef(true);

  const login = async (email: string, password: string) => {
    try {
      const { token, record: user } = await pb
        .collection("users")
        .authWithPassword(email, password);
      if (token) {
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

  const refresh = async () => {
    try {
      const { token, record: user } = await pb
        .collection("users")
        .authRefresh();
      if (token) {
        dispatch({
          type: AuthActionsKind.LOGIN,
          payload: {
            token,
            user,
          },
        });
      }
    } catch (error) {
      console.log(error);
      logout();
    }
  };

  useEffect(() => {
    if (firstLoad.current) {
      refresh();
      firstLoad.current = false;
    }
  }, []);

  return {
    auth,
    login,
    logout,
    pb,
  };
};

export default useAuth;
