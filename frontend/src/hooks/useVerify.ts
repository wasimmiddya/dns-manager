import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../app/slices/modalSlice";

export const useVerify = () => {
  const [user, setUser] = useState<{ email: string; isLoggedIn: boolean }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios
        .post("/api/v1/user/auth")
        .then((res) => res.data).catch(err => err.response.status)

      console.log(response);

      if (response >= 400) {
        return navigate("/");
      }

      const { email } = response.payload;
      console.log(email);
      setUser({ email, isLoggedIn: true });

      dispatch(closeModal());
    })();
  }, []);

  return user;
};
