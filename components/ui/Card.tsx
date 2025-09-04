import { PropsWithChildren, HTMLAttributes } from "react";
import { clsx } from "clsx";

export default function Card({ children, className, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={clsx("card p-6", className)} {...rest}>
      {children}
    </div>
  );
}
