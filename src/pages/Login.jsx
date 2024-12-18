import React from "react";
import LayoutInstitucional from "../layout/Default";
import LayoutLogin from "../layout/Login";
import FormLogin from "../components/institucional/login/FormLogin";

export default function Login() {
  return (
    <React.StrictMode>
      <LayoutInstitucional>
      <LayoutLogin form={<FormLogin />} />
      </LayoutInstitucional>
    </React.StrictMode>
  );
}
