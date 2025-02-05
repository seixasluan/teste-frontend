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
    // <div className={cn("my-4", className)}>
    <div className="my-4">
      {label ? (
        <label className="text-black font-bold my-2">{label}</label>
      ) : null}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn(
          "w-full my-2 rounded-md border-2 border-transparent bg-slate-100 px-2 py-2 text-base text-stone-600 focus:outline-none focus:ring-0",
          className,
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
