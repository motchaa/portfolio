import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-[6rem] pb-[2rem] w-full">
      <div className="flex flex-col w-[90%] md:w-[60%] lg:w-[40%] items-center border-t border-white/10 pt-[2rem]">
        <p className="text-gray-400 text-[12px] md:text-[13px] font-medium flex items-center justify-center flex-wrap gap-x-1.5 tracking-wide">
          Made by <span className="text-gray-200">Thiago Mota</span>{" "}
          <span className="text-gray-500">·</span>{" "}
          <a
            href="https://github.com/motchaa"
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
          >
            @motchaa
          </a>
        </p>

        {/* icons redes sociais */}
        <div className="flex flex-row mt-[1.2rem] gap-x-5 items-center">
          <a
            href="https://github.com/motchaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.instagram.com/thiagou.mota?igsh=MW9ydG9kemg0cjFmeA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
