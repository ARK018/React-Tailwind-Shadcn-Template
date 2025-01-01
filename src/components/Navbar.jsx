import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSignInClick = () => {
    navigate("/signin");
  };
  return (
    <div className="w-full h-16 flex justify-between items-center px-12 border border-black/5">
      <div
        onClick={handleHomeClick}
        className="flex items-center gap-2 cursor-pointer"
      >
        <p className="text-xl font-medium">Home</p>
      </div>

      <button
        onClick={handleSignInClick}
        className="flex items-center px-6 py-2 rounded-lg text-white bg-black hover:bg-black/80 transition-colors"
      >
        <p className="text-white font-medium text-base">Sign In</p>
      </button>
    </div>
  );
};

export default Navbar;
