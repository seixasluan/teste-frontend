import { cn } from "@/helpers/cn";

export type SubmitButtonProps = React.ComponentProps<"button"> & {
  label?: React.ReactNode;
};
export default function SubmitButton({
  label,
  children,
  className,
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        "bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 font-semibold",
        className
      )}
      {...props}
    >
      {label || children}
    </button>
  );
}
