import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-0 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-24 sm:py-20 lg:px-8 lg:py-24 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                    <Link
                      href="#"
                      className="font-semibold whitespace-nowrap text-indigo-600"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl font-display">
                  Адвокатско дружество
                </h1>
                <p className="mt-8 text-2xl font-medium font-display">
                  „Бурков, Радев, Дюлгерска“
                </p>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 font-display">
                  Кантората предлага на своите клиенти всеобхватно правно
                  обслужване, в това число и по въпроси, свързани с
                  облигационното, вещното, търговското и трудовото право,
                  правото на интелектуална собственост, гражданския и
                  административния процес.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="#"
                    className="rounded-md bg-[#95161C] hover:bg-gray-300 hover:text-[#000000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                  <Link
                    href="#"
                    className="text-sm/6 font-semibold text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt=""
            src="/lawyer.jpg"
            className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
  );
}
