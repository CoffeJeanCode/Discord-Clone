import React from "react";
import { EmailInput, PasswordInput, TextInput } from "./Input";

interface InputProps {
  type: string | "text" | "password" | "email" | "checkbox" | "number";
  placeholder?: string | "Placeholder";
  required: boolean | true;
}

export default function Input({ type, placeholder, required }: InputProps) {
  switch (type) {
    case "text":
      return <TextInput placeholder={placeholder} required={required} />;
    case "email":
      return <EmailInput placeholder={placeholder} required={required} />;
    case "password":
      return <PasswordInput placeholder={placeholder} required={required} />;
    default:
      return <TextInput placeholder={placeholder} required={required} />;
  }
}
