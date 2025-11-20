import { Typewriter } from "react-simple-typewriter";
const Announcement = () => {
  return (
    <div className="flex items-center justify-center bg-[#9BB4C0] text-white text-[18px] font-semibold has-[30px]">
      <Typewriter
        words={["Beauty", "Bliss", "Welcome", "To", "You're" , "Shop", "35% off"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Announcement;
