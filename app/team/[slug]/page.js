import Link from "next/link";
import { getMemberInfo } from "../../../services/members";
import Image from "next/image";

export default async function MemberDetails({ params }) {
  const { slug } = await params;

  const member = await getMemberInfo(slug);

  if (!member) {
    return <div>Членът не е намерен.</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row bg-white overflow-hidden max-w-5xl mx-auto sm:pt-12">
        <div className="lg:w-1/3 w-full p-4 flex flex-col items-left">
          <Image
            width={250}
            height={375}
            alt={member.name}
            src={member.profilepircture}
            className="rounded-2xl object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
          <p className="text-gray-600 mb-4">{member.position}</p>
          <div className="text-gray-700">
            <p className="mb-2">
              <strong>Телефон: </strong>
              <Link href={`tel:${member.phonenumber}`}>
                {member.phonenumber}
              </Link>
            </p>
            <p className="mb-2">
              <strong>Email: </strong>
              <Link href={`mailto:${member.email}`}>{member.email}</Link>
            </p>

            <Link
              href={member.linkedin.url}
              target={member.linkedin.target}
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
          </div>
        </div>
        <div className="lg:w-2/3 w-full p-4">
          <div
            className="text-gray-700 prose leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: member.description,
            }}
          />
        </div>
      </div>
    </div>
  );
}
