"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = {
  categories: [
    {
      id: "services",
      name: "Услуги",
      featured: [
        {
          name: "Търговско и дружествено право",
          href: "#",
          imageSrc: "/commercial_company_law.jpg",
          imageAlt: "Търговско и дружествено право ",
        },
        {
          name: "Вещно право",
          href: "#",
          imageSrc: "/property_law.jpg",
          imageAlt: "Вещно право",
        },
      ],
      services: [
        {
          id: "labor_and_social_security_law",
          name: "Трудово и осигурително право",
          href: "#",
        },
        {
          id: "family_and_inheritance_law",
          name: "Семейно и наследствено право",
          href: "#",
        },
        {
          id: "administrative_law_and_process",
          name: "Административно право и процес",
          href: "#",
        },
        {
          id: "intellectual_and_industrial_property",
          name: "Интелектуална и индустриална собственост",
          href: "#",
        },
        {
          id: "media_law",
          name: "Медийно право",
          href: "#",
        },
        {
          id: "advertising_law",
          name: "Реклама",
          href: "#",
        },
        {
          id: "internet_law",
          name: "Интернет",
          href: "#",
        },
        {
          id: "competition_law",
          name: "Конкурентно право",
          href: "#",
        },
        {
          id: "non_governmental_sector",
          name: "Неправителствен сектор",
          href: "#",
        },
        {
          id: "mediation",
          name: "Медиация",
          href: "#",
        },
        {
          id: "litigation_representation",
          name: "Процесуално представителство",
          href: "#",
        },
        {
          id: "public_procurement",
          name: "Обществени поръчки",
          href: "#",
        },
        {
          id: "personal_data_protection",
          name: "Защита на личните данни",
          href: "#",
        },
      ],
    },
  ],
  pages: [
    { name: "Начало", href: "/" },
    { name: "Екип", href: "/team" },
    { name: "Блог", href: "#" },
    { name: "Контакти", href: "/contact" },
  ],
};

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white sticky shadow-md top-0 block w-full z-50">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      href={page.href}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium text-left whitespace-nowrap text-gray-900"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pt-10 pb-8"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <Link
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.services.map((service) => (
                      <div key={service.id}>
                        <ul
                          role="list"
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li key={service.name} className="flow-root">
                            <Link
                              href={service.href}
                              className="-m-2 block p-2 text-gray-500"
                            >
                              {service.name}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="#">
                  <span className="sr-only">BRD</span>
                  <img alt="" src="/brd_menu_logo.png" className="h-8 w-auto" />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600 cursor-pointer">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow-sm"
                        />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <Link
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0 z-10"
                                      />
                                      {item.name}
                                    </Link>
                                    <p aria-hidden="true" className="mt-1">
                                      Виж повече
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <ul className="text-sm divide-y divide-gray-100 start-1 row-start-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                                {category.services.map((service) => (
                                  <li
                                    key={service.id}
                                    className="flex gap-x-4 py-5"
                                  >
                                    <Link
                                      className="min-w-0 w-full block"
                                      href={service.href}
                                    >
                                      <p className="text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-indigo-600">
                                        {service.name}
                                      </p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
