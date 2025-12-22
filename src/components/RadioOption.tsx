interface RadioOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const RadioOption = ({ label, selected, onClick }: RadioOptionProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 cursor-pointer"
    >
      <div className={`custom-radio ${selected ? "selected" : ""}`} />
      <span className="text-foreground text-sm">{label}</span>
    </button>
  );
};

export default RadioOption;
