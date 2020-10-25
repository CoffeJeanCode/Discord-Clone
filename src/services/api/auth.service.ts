import { apiConfig as api } from "services/config.service";

interface UserData {
  username: string;
  email: string;
  password: string;
}

export const signUp = ({ username, email, password }: UserData) => {
  api.post("/signup", {
    username,
    email,
    password,
  });
};
