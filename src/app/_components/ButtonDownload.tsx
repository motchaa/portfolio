export default function ButtonDownload() {
  return (
    <div className="mt-4 md:mt-6 w-full flex justify-center lg:justify-start">
      <a
        href="/curriculo.docx"
        download="Curriculo_Thiago_Mota.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-6 md:px-9 rounded-md bg-gradient-to-r font-semibold flex flex-row gap-x-2 items-center from-red-600 to-red-950 text-sm md:text-base transition-all duration-300 hover:from-red-500 hover:to-red-800 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-[1.03]"
      >
        Download CV
      </a>
    </div>
  );
}
