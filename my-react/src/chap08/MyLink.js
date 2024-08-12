import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./RouterNav.css";

export function MyLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isMatch = !!useMatch({
    path: resolvedPath.pathname,
    end: true,
  });
  return isMatch ? (
    <sapn className="active">{children}</sapn>
  ) : (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
