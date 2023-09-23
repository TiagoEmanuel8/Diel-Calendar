"use client"

import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import FormInput from "@/components/forms/UserFormInput";

// Define as validações usando yup
const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  mobileNumber: yup.string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{11}$/, "Número de celular inválido")
    .required("Número de celular é obrigatório")
});

const Register: React.FC = () => {

  // Use yupResolver para integrar yup ao useForm
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: Record<string, any>) => {
    console.log(data);
    // Faça a chamada à API aqui
  };

  return (
    <div className="p-4">
      {/* <NavBar /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput 
          label="Nome"
          error={errors.name}
          {...register("name")} 
        />
        <FormInput 
          label="E-mail" 
          type="email"
          error={errors.email}
          {...register("email")} 
        />
        <FormInput
          label="Senha"
          type="password"
          error={errors.password}
          {...register("password")}
        />
        <FormInput
          label="Número de celular"
          type="tel"
          error={errors.mobileNumber}
          {...register("mobileNumber")}
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Register;
