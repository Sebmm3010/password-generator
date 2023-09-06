import { FC } from 'react';
import { FormData } from '.';

interface Props {
  label: string;
  type: 'upperCase' | 'symbols' | 'number';
  form: FormData;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
}
export const Checkbox: FC<Props> = ({ label, form, setForm, type }) => {
  const handleCheckboxChange = () => {
    setForm((prevForm) => ({
      ...prevForm,
      [type]: !prevForm[type] // Actualiza solo la propiedad correspondiente al tipo
    }));
  };
  return (
    <div className="flex justify-between">
      <p>{label}</p>
      <input
        type="checkbox"
        checked={form[type]}
        onChange={handleCheckboxChange}
        className="w-5 h-5 bg-gray-800 border-gray-300 rounded"
      />
    </div>
  );
};
