import { useEffect } from "react";

export default function Toast({
  message,
  type = "success",
  onClose,
  duration = 4000,
}) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded text-sm font-semibold shadow-lg animate-[toast-in_0.2s_ease-out] ${
        type === "success"
          ? "bg-primary-accent text-primary"
          : "bg-red-500 text-white"
      }`}
    >
      {message}
    </div>
  );
}
