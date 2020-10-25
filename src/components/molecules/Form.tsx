import React from "react";

interface FormProps {
  onSubmit: () => void;
  children: React.ReactChild[];
}

export default function Form({ onSubmit, children }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}
