import { getContactInfo } from "@/services/contacts";
import Link from "next/link";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  return {
    title:
      "Политика за поверителност - Адвокатско дружество „Бурков, Радев, Дюлгерска“",
    description:
      "Научете повече за нашата политика за поверителност и как обработваме вашите лични данни.",
  };
}

export default async function PrivacyPolicy() {
  const locale = await getLocale();
  const contactInfo = await getContactInfo(locale);

  return (
    <div className="container mx-auto p-6 max-w-5xl bg-white py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">
        Политика за поверителност
      </h1>
      <p className="mb-4 text-gray-700">
        Настоящата Политика за поверителност описва как "Адвокатско дружество
        Бурков, Радев, Дюлгерска" ("Ние", "Нашата кантора") събира, използва и
        защитава личните данни на потребителите на нашия уебсайт.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        1. Събиране на лични данни
      </h2>
      <p className="text-gray-700">
        Ние събираме следните категории лични данни, предоставени доброволно от
        вас:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Име и фамилия</li>
        <li>Имейл адрес (при абонамент за бюлетин)</li>
        <li>Телефонен номер (при попълване на контактната форма)</li>
        <li>Съобщения и запитвания, изпратени чрез формата за контакт</li>
        <li>IP адрес и данни за използване на уебсайта (чрез бисквитки)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        2. Цели на обработката
      </h2>
      <p className="text-gray-700">
        Ние обработваме вашите лични данни за следните цели:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Отговор на запитвания и предоставяне на правни услуги</li>
        <li>Изпращане на бюлетини и правна информация</li>
        <li>Анализ и подобряване на потребителското изживяване</li>
        <li>Съобразяване със законовите изисквания</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        3. Съхранение и защита на личните данни
      </h2>
      <p className="text-gray-700">
        Личните данни се съхраняват на защитени сървъри и достъпът до тях е
        ограничен само до оправомощени лица. Ние не предоставяме вашите данни на
        трети страни без вашето изрично съгласие, освен ако това не се изисква
        по закон.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        4. Бисквитки
      </h2>
      <p className="text-gray-700">
        Нашият уебсайт използва бисквитки за подобряване на потребителското
        изживяване. Можете да откажете или управлявате използването на бисквитки
        чрез настройките на вашия браузър.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">
        5. Вашите права
      </h2>
      <p className="text-gray-700">
        Според Общия регламент за защита на данните (GDPR) вие имате следните
        права:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mt-2">
        <li>Право на достъп до вашите лични данни</li>
        <li>Право на коригиране на неточни данни</li>
        <li>Право на изтриване ("правото да бъдеш забравен")</li>
        <li>Право на възражение срещу обработката</li>
        <li>Право на преносимост на данните</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-900">6. Контакт</h2>
      <p className="text-gray-700">
        Ако имате въпроси относно настоящата политика за поверителност или
        желаете да упражните своите права, моля свържете се с нас на:
      </p>
      {contactInfo && (
        <p className="text-gray-700 mt-2">
          <Link
            href={`mailto:${contactInfo.email}`}
            className="hover:text-gray-900"
          >
            <strong>Email:</strong> {contactInfo.email} <br />
          </Link>
          <Link
            href={`tel:${contactInfo.phone_number}`}
            className="hover:text-gray-900"
          >
            <strong>Телефон:</strong> {contactInfo.phone_number} <br />
          </Link>
          <strong>Адрес:</strong> {contactInfo.address}
        </p>
      )}
    </div>
  );
}
