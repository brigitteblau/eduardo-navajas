import { PropsWithChildren, HTMLAttributes } from "react";
import { clsx } from "clsx";

export default function Section({ children, className, ...rest }: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <section className={clsx("section", className)} {...rest}>
      {children}
    </section>
  );
}
