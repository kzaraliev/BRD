"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getMembers } from "../services/members";

export default function Team() {
  const [members, setMembers] = useState([]);

  // Fetch members from WordPress API on component mount
  useEffect(() => {
    const fetchMembers = async () => {
      const membersData = await getMembers();
      setMembers(membersData);
    };

    fetchMembers();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-8xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">
            Нашият екип
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 text-center">
            Екипът на Адвокатско дружество „Бурков, Радев, Дюлгерска“ съчетава
            по уникален начин опита, креативността, постоянството и жаждата за
            знания. Кантората предлага на своите клиенти всеобхватно правно
            обслужване, в това число и по въпроси, свързани с облигационното,
            вещното, семейното и наследственото право, търговското и трудовото
            право, правото на интелектуална собственост, гражданския и
            административния процес. Нашите адвокати притежават богат опит при
            консултирането на някои от най-новите и бързоразвиващи сфери на
            бизнеса, каквито са: медиите (телевизия, радио и интернет),
            телекомуникациите, маркетинга и рекламата, създаването на
            съдържание, новите технологии и др. Работни езици: български,
            английски, сръбски, руски, немски.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {members.map((member) => (
            <li key={member.id} className="flex flex-col items-center">
              <Link href={`/team/${member.slug}`} prefetch={true}>
                <Image
                  width={250}
                  height={375}
                  alt={member.name}
                  src={member.profilepircture}
                  className="rounded-2xl object-cover"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {member.name}
                </h3>
                <p className="text-base/7 text-gray-600">{member.position}</p>
              </Link>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <Link
                    href={member.linkedin.url}
                    target={member.linkedin.target}
                    prefetch={true}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
