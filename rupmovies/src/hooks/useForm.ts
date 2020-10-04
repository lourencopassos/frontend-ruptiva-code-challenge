import { ChangeEvent, useState } from 'react';

export const useForm = (initialValues: { [index: string]: string }) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return [form, onChange, resetForm] as const;
};
