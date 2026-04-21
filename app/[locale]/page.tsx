import { useTranslations } from "next-intl";
import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.minhagrana";

export default function PrivacyPolicy() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/logo.png"
            alt="Minha Grana"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="mb-4 w-auto h-auto"
          />
          <p className="mt-2 text-gray-500 text-lg">{t("header.subtitle")}</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-10 text-gray-700">
        <p className="text-sm text-gray-400 mb-8">
          {t("lastUpdated", { date: t("lastUpdatedDate") })}
        </p>

        <Section title={t("sections.introduction.title")}>
          <p>
            {t.rich("sections.introduction.content", {
              strong: (chunks) => <strong>{chunks}</strong>,
              link: (chunks) => (
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#19c746] underline"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </Section>

        <Section title={t("sections.dataCollection.title")}>
          <p>
            {t.rich("sections.dataCollection.content1", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <p>{t("sections.dataCollection.content2")}</p>
        </Section>

        <Section title={t("sections.localStorage.title")}>
          <p>{t("sections.localStorage.content")}</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>{t("sections.localStorage.item1")}</li>
            <li>{t("sections.localStorage.item2")}</li>
            <li>{t("sections.localStorage.item3")}</li>
          </ul>
        </Section>

        <Section title={t("sections.permissions.title")}>
          <p>{t("sections.permissions.content")}</p>
        </Section>

        <Section title={t("sections.openSource.title")}>
          <p>
            {t.rich("sections.openSource.content", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </Section>

        <Section title={t("sections.children.title")}>
          <p>{t("sections.children.content")}</p>
        </Section>

        <Section title={t("sections.changes.title")}>
          <p>{t("sections.changes.content")}</p>
        </Section>

        <Section title={t("sections.contact.title")}>
          <p>{t("sections.contact.content")}</p>
          <div className="mt-3 bg-gray-50 rounded-lg p-4 text-sm space-y-1">
            <p>
              <strong>{t("sections.contact.email")}</strong>{" "}
              <a
                href="mailto:leonardo.behnck@gmail.com"
                className="text-[#19c746] underline"
              >
                leonardo.behnck@gmail.com
              </a>
            </p>
            <p>
              <strong>{t("sections.contact.app")}</strong>{" "}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19c746] underline"
              >
                {t("sections.contact.playStoreLink")}
              </a>
            </p>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-[#19c746] py-6 px-4 text-center text-sm text-white">
        {t("footer")}
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
