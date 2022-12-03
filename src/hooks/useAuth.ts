import useApi from "./useApi";
import { useReducer } from "react";

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
  const pb: any = useApi();
  const [auth, dispatch] = useReducer(authReducer, {
    token: pb.authStore.token,
    user: pb.authStore.record,
  });

  const login = async (email: string, password: string) => {
    try {
      const { token, record: user } = await pb
        .collection("users")
        .authWithPassword(email, password);
      if (token) {
        pb.authStore.saveRecord(user);
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
