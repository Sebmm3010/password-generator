import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Checkbox } from '.';
import {
  checkbox,
  numbersChars,
  symbolsChars,
  uppercaseChars
} from '../constants/intex';

export interface FormData {
  password: string;
  length: number;
  upperCase: boolean;
  number: boolean;
  symbols: boolean;
}

export const Form = () => {
  const [form, setForm] = useState<FormData>({
    password: '',
    length: 5,
    upperCase: false,
    number: false,
    symbols: false
  });
  const handleCopyText = () => {
    if (form.password.length === 0) return;
    navigator.clipboard.writeText(form.password);
    toast.success('Contraseña copiada!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
  };

  const handleLength = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(form.length))) return;
    setForm({ ...form, length: Number(target.value) });
  };

  const generatePassword = () => {
    if (
      Number(form.length) < 5 ||
      Number(form.length) > 16 ||
      isNaN(Number(form.length))
    )
      return;
    let password = '  ';
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz';
    if (form.upperCase) validCharacters += uppercaseChars;
    if (form.number) validCharacters += numbersChars;
    if (form.symbols) validCharacters += symbolsChars;

    for (let i = 0; i < form.length; i++) {
      const randomIndex = Math.floor(Math.random() * validCharacters.length);
      password += validCharacters.charAt(randomIndex);
    }
    setForm({ ...form, password });
  };

  return (
    <div className="bg-gray-200 md:p-5 rounded-md p-2">
      <h1 className="font-bold text-lg text-gray-950">
        Generador de contraseñas
      </h1>
      <div className="flex flex-col md:flex-row gap-2 mt-2">
        <input
          className="w-[350px] input-general"
          placeholder="6A$SSpYTS4hM6B$H"
          type="text"
          value={form.password}
          readOnly
          disabled
        />
        <button onClick={handleCopyText} type="button" className="btn-primary">
          Copiar
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-3">
        {/* Length */}
        <div className="flex justify-between">
          <p>Tamaño de la contraseña</p>
          <input
            type="number"
            className="input-general w-[100px]"
            value={form.length}
            onChange={handleLength}
            min={5}
            max={16}
          />
        </div>
        {/* Checkboxes */}
        {checkbox.map((value) => (
          <Checkbox
            key={value.type}
            label={value.label}
            type={value.type}
            form={form}
            setForm={setForm}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button onClick={generatePassword} className="btn-primary mt-4 w-full">
          Generar contraseña
        </button>
      </div>
    </div>
  );
};
