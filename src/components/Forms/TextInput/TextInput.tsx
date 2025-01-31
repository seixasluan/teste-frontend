import { cn } from "@/helpers/cn";

export type TextInputProps = React.ComponentProps<"input"> & {
  label?: string | null;
  error?: string | null;
};

export default function TextInput({
  label,
  type = "text",
  name,
  placeholder,
  className,
  error,
  ...props
}: TextInputProps) {
  return (
    <div className={cn("my-4", className)}>
      {label ? (
        <label className="text-black font-bold my-2">{label}</label>
      ) : null}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn(
          "w-full my-2 rounded-md border-2 border-transparent bg-slate-100 px-2 py-2 text-base text-black focus:outline-none focus:ring-0",
          {
            "border-red-500": !!error,
          }
        )}
        {...props}
      />
      {error ? (
        <div>
          <small className="text-sm text-red-500">{error}</small>
        </div>
      ) : null}
    </div>
  );
}
