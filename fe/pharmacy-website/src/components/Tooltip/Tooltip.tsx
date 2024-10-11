interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div className="relative flex items-center group">
      {children}

      <div className="absolute bottom-full mb-2 w-max px-3 py-1 bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
        {text}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rotate-45 translate-y-2"></div>
      </div>
    </div>
  );
};

export default Tooltip;
