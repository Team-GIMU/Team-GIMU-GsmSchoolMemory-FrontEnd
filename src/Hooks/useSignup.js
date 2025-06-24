import TokenManager from "../apis/TokenManager";
import { useEffect } from "react";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSignup = ({ email, name, stuNum, password }) => {
  const navigate = useNavigate();

  const grade = stuNum ? Number(stuNum.slice(0, 1)) : 0;
  const classNum = stuNum ? Number(stuNum.slice(1, 2)) : 0;
  const studentNum = stuNum ? Number(stuNum.slice(2, 4)) : 0;

  const { fetch } = useFetch({
    url: "/auth",
    method: "post",
    body: {
      email,
      name,
      studentNum,
      password,
      grade,
      classNum
    },
    onSuccess: () => {
      toast.success("회원가입이 완료되었습니다.");
      navigate("/");
      window.location.reload();
    },
    onFailure: () => {
      toast.error("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  });

  return { fetch };
};

export default useSignup;
