import React, { useState } from "react";

export default function useHandleChange(initialValue) {
  const [value, setValue] = useState(
    initialValue
    //     {
    //     fullName: "",
    //     email: "",
    //     hobby: false,
    //   }
  );
  const handleChange = (e) => {
    const type = e.target.type;
    setValue({
      ...value,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    value,
    handleChange,
  };
}
