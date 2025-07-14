import { roleState } from "./RoleStore";
import jwtDecode from "jwt-decode";
import TokenManager from "../apis/TokenManager";
import { RoleData } from "../assets/data/RoleData";
import { useFetch } from "../Hooks";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const GetRole = () => {
  const [role, setRole] = useRecoilState(roleState);

  const { fetch } = useFetch({
    url: `/inquiry`,
    method: "get",
    onSuccess: () => {
      setRole("관리자");
    },
    onFailure: () => {
      setRole("사용자");
    },
    errors: {
      400: "문의 정보를 가져오지 못함",
      401: "권한이 없습니다."
    }
  });
  useEffect(() => {
    fetch();
  }, []);

  return role;
};

export default GetRole;
