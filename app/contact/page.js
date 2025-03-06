"use client";
import { useState, useEffect } from "react";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import Swal from "sweetalert2";

import { getContactInfo } from "../../services/contacts";

const URL_FORM =
  "https://brd.devclick.net/wp-json/contact-form-7/v1/contact-forms/43/feedback";

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContact() {
      setLoading(true);
      const data = await getContactInfo();
      if (data) setContactInfo(data);
      setLoading(false);
    }
    fetchContact();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const phoneNumber = e.target["phone-number"].value;
    const message = e.target.message.value;

    formData.append("_wpcf7_unit_tag", "43");
    formData.append("your-name", name);
    formData.append("your-email", email);
    formData.append("your-subject", subject);
    formData.append("your-tel", phoneNumber);
    formData.append("your-message", message);

    const reqOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const req = await fetch(URL_FORM, reqOptions);
      const response = await req.json();

      if (response.status === "validation_failed") {
        let fieldErrors = {};
        response.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      } else if (response.status === "mail_sent") {
        Swal.fire({
          timer: 4000,
          title: "Успешно изпратено съобщение!",
          text: "Очаквайте отговор скоро : )",
          icon: "success",
        });
        setErrors({});
        e.target.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Неочаквана грешка...",
          text: "Нещо се случи! Опитайте отново по-късно",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Неуспешно изпращане!",
        text: "Проверете връзката с интернет и опитайте отново.",
      });
    }
  };

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-24 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base text-gray-600">
              {loading ? (
                <div className="flex justify-center items-center h-10">
                  <svg
                    className="animate-spin h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                </div>
              ) : (
                contactInfo && (
                  <>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <BuildingOffice2Icon className="h-7 w-6 text-gray-400" />
                      </dt>
                      <dd>{contactInfo.address}</dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <PhoneIcon className="h-7 w-6 text-gray-400" />
                      </dt>
                      <dd>
                        <a
                          href={`tel:${contactInfo.phone_number}`}
                          className="hover:text-gray-900"
                        >
                          {contactInfo.phone_number}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <EnvelopeIcon className="h-7 w-6 text-gray-400" />
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="hover:text-gray-900"
                        >
                          {contactInfo.email}
                        </a>
                      </dd>
                    </div>
                  </>
                )
              )}
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-6 pt-20 pb-24 sm:pb-24 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Име*
                </label>
                <div className="mt-2.5">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
                {errors["your-name"] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors["your-name"]}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Имейл*
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
                {errors["your-email"] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors["your-email"]}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Телефон*
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
                {errors["your-tel"] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors["your-tel"]}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Тема*
                </label>
                <div className="mt-2.5">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
                {errors["your-subject"] && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors["your-subject"]}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Съобщение
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Изпрати запитване
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
