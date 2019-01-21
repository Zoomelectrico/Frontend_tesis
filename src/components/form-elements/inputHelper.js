import React from "react";
import { EmailInput, FileInput, PasswordInput, TextInput } from "./";

const inputHelper = (field, handleChange) => {
  switch (field.type) {
    case "text":
      return (
        <TextInput field={field} handleChange={handleChange} key={field.name} />
      );
    case "password":
      return (
        <PasswordInput
          field={field}
          handleChange={handleChange}
          key={field.name}
        />
      );
    case "email":
      return (
        <EmailInput
          field={field}
          handleChange={handleChange}
          key={field.name}
        />
      );
    case "file":
      return (
        <FileInput field={field} handleChange={handleChange} key={field.name} />
      );
    default:
      return (
        <TextInput field={field} handleChange={handleChange} key={field.name} />
      );
  }
};

export default inputHelper;
