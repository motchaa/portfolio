import ButtonDownload from "../_components/ButtonDownload";
import ImageAbout from "../_components/ImageAbout";
import SubtitleAbout from "../_components/SubtitleAbout";
import TextAbout from "../_components/TextAbout";
import TitleAbout from "../_components/TitleAbout";

export default function SectionAbout() {
  return (
    <section
      id="about"
      className="flex items-center justify-center mt-[7.5rem] md:mt-[18rem] lg:mt-[25rem] px-4"
    >
      <div className="flex flex-col items-center justify-center w-[95%] md:w-[85%] lg:w-[70%]">
        <TitleAbout />
        <SubtitleAbout />

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-x-[3rem] mt-[2rem] md:mt-[3rem]">
          <ImageAbout />
          <TextAbout />
        </div>

        <div className="mt-6 md:mt-8">
          <ButtonDownload />
        </div>
      </div>
    </section>
  );
}
