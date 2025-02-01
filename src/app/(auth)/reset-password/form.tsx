"use client";

interface ResetPasswordFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

// import { useState } from "react";
import { SubmitButton, TextInput } from "@/components";

export default function ResetPasswordForm() {
  return (
    <form>
      <TextInput
        name="email"
        label="E-mail:"
        inputMode="email"
        placeholder="E-mail"
        required
      />
      <TextInput
        name="password"
        label="Senha:"
        type="password"
        placeholder="Senha"
        required
      />
      <TextInput
        name="passwordConfirmation"
        label="Confirmar senha:"
        type="password"
        placeholder="Confirmar senha"
        required
      />

      <SubmitButton label="Alterar Senha" />
    </form>
  );
}
