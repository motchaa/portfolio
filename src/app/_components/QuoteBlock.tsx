export default function QuoteBlock() {
  return (
    <div className="w-full mt-4 md:mt-5">
      <div className="relative rounded-xl overflow-hidden group">
        {/* Gradient border glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/30 via-amber-400/20 to-red-500/10 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative backdrop-blur-md bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-3 flex items-start gap-3">
          {/* Left accent bar */}
          <div className="hidden md:block w-1 min-h-full self-stretch rounded-full bg-gradient-to-b from-red-500 via-amber-400 to-red-500/40 shrink-0" />

          <div className="flex flex-col items-center md:items-start w-full">
            {/* Decorative quote mark */}
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-red-500/60 mb-0.5 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>

            {/* Quote text */}
            <p className="text-white/90 font-semibold text-xs md:text-sm lg:text-base italic font-montserrat leading-relaxed tracking-wide text-center md:text-left">
              Build it. Test it. Break it. Fix it. Repeat.
            </p>

            {/* Author */}
            <div className="flex items-center gap-2 mt-1">
              <span className="w-4 h-[1.5px] bg-gradient-to-r from-red-500 to-amber-400 rounded-full" />
              <p className="text-white/50 text-[10px] md:text-xs font-medium tracking-wider uppercase">
                Tony Stark
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
