export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ISubmitFormLogin {
  handleSubmit: () => void,
  onSubmit: () => void,
}
