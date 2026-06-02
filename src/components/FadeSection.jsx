import useInView from "../hooks/useInView";

export default function FadeSection({ children, className = "" }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}