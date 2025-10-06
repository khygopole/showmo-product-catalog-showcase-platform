type ToggleSwitchProps = {
  isOn: boolean;
  handleToggle: () => void;
  onLabel?: string;
  offLabel?: string;
};

export default function ToggleSwitch({
  isOn,
  handleToggle,
  onLabel = "On",
  offLabel = "Off",
}: ToggleSwitchProps) {
  return (
    <div className="flex items-center space-x-4">
      <span className="font-semibold text-white w-10">
        {isOn ? onLabel : offLabel}
      </span>
      <div className="flex items-center relative">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className={`hover:cursor-pointer w-12 h-6 appearance-none rounded-full p-1 duration-300 ease-in-out border border-solid border-white ${
            isOn ? "bg-green-500" : "bg-black"
          }`}
          aria-label={`Toggle ${isOn ? "off" : "on"}`}
        />
        <div
          className={`absolute w-4 h-4 bg-black border-3 border-solid border-white rounded-full shadow-md transform duration-300 ease-in-out ${
            isOn ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </div>
    </div>
  );
}
