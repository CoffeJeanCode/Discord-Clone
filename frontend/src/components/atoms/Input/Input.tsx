import React from "react";

interface InputProps {
  placeholder: string | undefined;
  required: boolean | true;
}

export const TextInput = ({ placeholder }: InputProps) => (
  <input type="text" className="input__text" placeholder={placeholder} />
);

export const EmailInput = ({ placeholder }: InputProps) => (
  <input type="email" className="input__email" placeholder={placeholder} />
);

export const PasswordInput = ({ placeholder }: InputProps) => (
  <input
    type="password"
    className="input__password"
    placeholder={placeholder}
  />
);
