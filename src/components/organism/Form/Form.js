import React from "react";

import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Wysyłam");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value="Login" />
      <Input type="password" value="Pasword" />
      <Button type="submit" primaryColor="true">
        Zaloguj
      </Button>
    </form>
  );
};

export default Form;
