import SlideInBottom from "../framer-motion/SlideInBottom";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <SlideInBottom>
      <h2 className="inline-block text-3xl md:text-4xl font-bold text-leaf-600 relative mb-4">
        {children}
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-leaf-400 rounded-full"></span>
      </h2>
    </SlideInBottom>
  );
};

export default Header;
