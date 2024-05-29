import {
  LoginErrorProps,
  LoginProps,
  RegisterErrorProps,
  RegisterProps,
} from "@/types";

export function validateLoginForm(values: LoginProps) {
  let errors: LoginErrorProps = {};

  //Validación para mail de Login
  if (!values.email) {
    errors.email = "El Email es requerido";
  } else if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/.test(values.email)) {
    errors.email = "El Email no es válido";
  }

  //Validación para Password de Login
  if (!values.password) {
    errors.password = "La contraseña es requerida";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos una letra mayúscula";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos una letra minúscula";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  } else if (!/[\W_]/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos un carácter especial";
  }
}

export function validateRegisterForm(values: RegisterProps) {
  let errors: RegisterErrorProps = {};

  // Validación de Email
  if (!values.email) {
    errors.email = "El Email es requerido";
  } else if (!/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/.test(values.email)) {
    errors.email = "El Email no es válido";
  }

  // Validación de Contraseña
  if (!values.password) {
    errors.password = "La contraseña es requerida";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos una letra mayúscula";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos una letra minúscula";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  } else if (!/[\W_]/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos un carácter especial";
  }

  // Validación de Nombre
  if (!values.name) {
    errors.name = "El nombre es requerido";
  } else if (values.name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
    errors.name = "El nombre solo puede contener letras y espacios";
  }

  // Validación de Dirección
  if (!values.address) {
    errors.address = "La dirección es requerida";
  } else if (values.address.length < 5) {
    errors.address = "La dirección debe tener al menos 5 caracteres";
  }

  // Validación de Teléfono
  if (!values.phone) {
    errors.phone = "El teléfono es requerido";
  } else if (!/^\d{10,15}$/.test(values.phone)) {
    errors.phone = "El teléfono no es válido";
  }

  return errors;
}
