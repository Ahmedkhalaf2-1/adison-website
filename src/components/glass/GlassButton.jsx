import { Link } from "react-router-dom";

export default function GlassButton({
  to,
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary: `
      border border-white/10
      bg-white/[0.04]
      text-white
      hover:bg-white/[0.12]
      hover:border-white/20
    `,

    secondary: `
      border border-white/5
      bg-transparent
      text-white/80
      hover:text-white
      hover:bg-white/[0.05]
      hover:border-white/15
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = <span>{children}</span>;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
