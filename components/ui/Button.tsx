import { clsx } from "clsx";
import { PropsWithChildren, ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "destructive";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      disabled,
      ...rest
    },
    ref
  ) => {
    /** Base: contraste alto + focus visible + micro-interacciones */
    const base = [
      "relative inline-flex items-center justify-center gap-2",
      "rounded-xl font-medium leading-tight tracking-tight select-none",
      "transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "will-change-transform hover:-translate-y-0.5 active:translate-y-0",
      "shadow-sm hover:shadow-md",
      "hover: cursor-pointer",
    ].join(" ");

    /** Variantes con texto legible en todos los estados */
    const variants: Record<ButtonVariant, string> = {
      primary: "bg-brand-leaf text-black hover:bg-brand-leafDark",
      secondary: "bg-brand-yellow text-brand-ink hover:brightness-95",
      ghost:
        "bg-[var(--background)] text-brand-leaf border border-brand-leaf/30 hover:bg-brand-leaf/10",
      outline:
        "bg-transparent text-brand-leaf border-2 border-brand-leaf hover:bg-brand-leaf ",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "px-3 py-1.5 text-sm min-h-[36px]",
      md: "px-5 py-3 text-sm min-h-[44px]",
      lg: "px-6 py-3.5 text-base min-h-[48px]",
      xl: "px-8 py-4 text-lg min-h-[56px]",
    };

    const width = fullWidth ? "w-full" : "";
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], width, className, {
          "cursor-wait pointer-events-none": loading,
        })}
        disabled={isDisabled}
        aria-busy={loading}
        data-loading={loading ? "true" : "false"}
        {...rest}
      >
        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Contenido */}
        <div className={clsx("flex items-center gap-2", { "opacity-0": loading })}>
          {leftIcon && <span className="shrink-0 w-4 h-4">{leftIcon}</span>}
          {children && <span className="truncate">{children}</span>}
          {rightIcon && <span className="shrink-0 w-4 h-4">{rightIcon}</span>}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
