const Button = ({ text, onClick, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`w-full bg-[#A020F0] text-white py-2 rounded-md hover:bg-[#8A2BE2] disabled:opacity-50 transition duration-300 text-sm font-medium ${
        disabled ? 'cursor-not-allowed' : ''
      }`}>
      {text}
    </button>
  );
};

export default Button;