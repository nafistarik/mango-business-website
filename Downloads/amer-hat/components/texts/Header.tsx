import SlideInBottom from "../framer-motion/SlideInBottom";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <SlideInBottom>
      <h2 className="inline-block text-3xl md:text-4xl font-bold text-leaf-800 relative">
        {children}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-leaf-400 rounded-full"></span>
      </h2>
    </SlideInBottom>
  );
};

export default Header;
