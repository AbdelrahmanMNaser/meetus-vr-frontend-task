const TextInput = ({ 
  type, 
  placeholder, 
  icon, 
  value, 
  onChange, 
  name,
  error,
  onBlur
}) => {
  return (
    <div className="space-y-1">
      <div className={`flex items-center bg-custom-gray bg-opacity-20 text-white rounded-lg px-3 py-2 focus-within:ring-2 ${
        error ? 'ring-red-500 border-red-500' : 'ring-purple-500 border-white'
      } border`}>
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          className="w-full bg-transparent outline-none text-sm placeholder-slate-200"
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
};

export default TextInput;