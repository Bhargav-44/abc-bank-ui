'use client';

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    disabled?: boolean,
    placeholder?: string,
    min?: string,
    step?: string
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required = false,
    register,
    errors,
    disabled,
    placeholder,
    min,
    step
}) => {
    return ( 
        <div>
            <label htmlFor={id} className="block text-sm font-medium laeding-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input 
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    placeholder={placeholder}
                    min={min}
                    step={step}
                    {...register(id, { required })}
                    className={clsx(`
                        form-input
                        block
                        w-full
                        rounded-md
                        border-0
                        py-1.5
                        px-3
                        text-gray-900
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-gray-100
                        placeholder:text-gray-400
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-sky-600
                        sm:text-sm
                        sm:leading-6`,
                        errors[id] && "focus:ring-rose-500",
                        disabled && "opacity-50 cursor-default"
                    )}
                />
            </div>
        </div>
     );
}
 
export default Input;
