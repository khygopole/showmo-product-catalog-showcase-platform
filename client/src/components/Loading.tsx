type SpinnerProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  ariaLabel?: string;
  message?: string | null;
  color?: string;
};

export default function Loading({
  size = 40,
  strokeWidth = 4,
  className = "",
  ariaLabel = "Loading",
  message = null,
  color = "#3b82f6",
}: SpinnerProps) {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="animate-spin"
        aria-hidden="true"
        style={{ color }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="opacity-20"
          fill="none"
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.25} ${circumference}`}
          strokeDashoffset="0"
          fill="none"
          className="origin-center"
        />
      </svg>

      {message && (
        <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {message}
        </span>
      )}
    </div>
  );
}
