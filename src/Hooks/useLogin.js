import TokenManager from "../apis/TokenManager";
import { useEffect } from "react";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLogin = ({ email, password }) => {
  const navigate = useNavigate();

  const { fetch } = useFetch({
    url: "/auth/login",
    method: "post",
    body: {
      email,
      password
    },
    skipLogin: true,
    onSuccess: data => {
      if (typeof window !== "undefined") {
        const tokenManager = new TokenManager();
        tokenManager.setTokens(data);
        toast.success("로그인에 성공하였습니다.");
        console.log(data.accessTokenExpiresIn, data.refreshTokenExpiresIn);
        navigate("/");
      }
    },
    onFailure: () => {
      toast.error("로그인에 실패하였습니다.");
    }
  });

  useEffect(() => {
    const checkLoggedIn = () => {
      const tokenManager = new TokenManager();
      return tokenManager.accessToken && tokenManager.validateToken(tokenManager.accessExp, tokenManager.accessToken);
    };

    if (checkLoggedIn()) {
      navigate("/");
      return;
    }
  }, [navigate]);

  return { fetch };
};

export default useLogin;
