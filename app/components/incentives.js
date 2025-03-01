const incentives = [
  {
    name: "Работни езици",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-14"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
        />
      </svg>
    ),
    description:
      "Предоставяме правни услуги на български, английски, сръбски, руски и немски език, осигурявайки ефективна комуникация с клиенти и партньори.",
  },
  {
    name: "10-year warranty",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2L2 7l10 5 10-5-10-5zm0 5v10m0 0l6 3m-6-3l-6 3"
        />
      </svg>
    ),
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l3 3m0 0l3-3m-3 3V9m9 6l3-3m0 0l3 3m-3-3v6"
        />
      </svg>
    ),
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
</svg> */
}

export default function Incentive() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Професионализъм и експертиза във всяка правна сфера
            </h2>
            <p className="mt-4 text-gray-500">
              Екипът на Адвокатско дружество „Бурков, Радев, Дюлгерска“ съчетава
              по уникален начин опита, креативността, постоянството и жаждата за
              знания. Кантората предлага на своите клиенти всеобхватно правно
              обслужване, в това число и по въпроси, свързани с облигационното,
              вещното, търговското и трудовото право, правото на интелектуална
              собственост, гражданския и административния процес.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">{incentive.icon}</div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
