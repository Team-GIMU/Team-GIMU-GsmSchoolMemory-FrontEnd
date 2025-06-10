import TokenManager from "../apis/TokenManager";
import { useEffect } from "react";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSignup = ({ email, name, password, schoolNum }) => {
  const navigate = useNavigate();

  const grade = schoolNum ? Number(schoolNum.slice(0, 1)) : 0;
  const classNum = schoolNum ? Number(schoolNum.slice(1, 2)) : 0;
  const stuNum = schoolNum ? Number(schoolNum.slice(2, 4)) : 0;

  const { fetch } = useFetch({
    url: "/auth",
    method: "post",
    onSuccess: () => {
      // if (typeof window !== "undefined") {
      //   const tokenManager = new TokenManager();
      //   tokenManager.setTokens(data);
      // }
      toast.success("회원가입이 완료되었습니다.");
      navigate("/");
      window.location.reload();
    },
    onFailure: () => {
      toast.error("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  });

  useEffect(() => {
    const checkLoggedIn = () => {
      const tokenManager = new TokenManager();
      return tokenManager.initToken();
    };

    if (checkLoggedIn()) {
      navigate("/");
      return;
    }

    fetch({ email, name, password, grade, classNum, stuNum });
  }, [navigate]);
};

export default useSignup;
