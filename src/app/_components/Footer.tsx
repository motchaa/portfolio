import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-[6rem]">
      <div className="flex flex-col w-[18rem] items-center border-red-500 border-t-2">
        <p className="mt-[1rem]">© 2026 Motcha.</p>

        {/* icons redes sociais */}
        <div className="flex flex-row mt-[0.8rem] gap-x-3 mb-[2rem] items-center">
          <div>
            <a href="https://github.com/motchaa">
              <FaGithub
                size={34}
                color="#ffffff"
                className=" py-[0.3rem] rounded-md"
              />
            </a>
          </div>

          <div>
            <a href="https://www.instagram.com/thiagou.mota?igsh=MW9ydG9kemg0cjFmeA%3D%3D&utm_source=qr">
              <FaInstagram
                size={34}
                color="#ffffff"
                className=" py-[0.3rem] rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
