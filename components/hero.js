import Image from "next/image";
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
            <div className="relative px-6 py-12 sm:py-12 lg:px-8 lg:py-14 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden mt-2 sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Полезни статии и новини от нашия блог.{" "}
                    <Link
                      href="/blog"
                      className="font-semibold whitespace-nowrap text-[#95161C]"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      Вижте повече <span aria-hidden="true">&rarr;</span>
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
                    href="/services"
                    className="rounded-md bg-[#95161C] hover:bg-gray-300 hover:text-[#000000] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Услуги
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm/6 font-semibold text-gray-900"
                  >
                    Контакти <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            width={955}
            height={776}
            priority
            fetchPriority="high"
            loading="eager"
            quality={80}
            alt="hero-baner"
            src="/lawyer.webp"
            className="object-cover lg:aspect-auto lg:size-full"
          />
        </д>
      </div>
    </div>
  );
}
