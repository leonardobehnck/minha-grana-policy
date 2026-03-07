import Image from "next/image";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.minhagrana";

export default function PrivacyPolicy() {
  const lastUpdated = "7 de março de 2026";

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
          <p className="mt-2 text-gray-500 text-lg">Política de Privacidade</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-10 text-gray-700">
        <p className="text-sm text-gray-400 mb-8">
          Última atualização: {lastUpdated}
        </p>

        <Section title="1. Introdução">
          <p>
            Bem-vindo ao <strong>Minha Grana</strong>, um aplicativo de controle
            financeiro pessoal de código aberto, licenciado sob a{" "}
            <strong>Licença MIT</strong>. Esta Política de Privacidade descreve
            como o aplicativo funciona em relação aos seus dados. O Minha Grana
            está disponível na{" "}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#19c746] underline"
            >
              Google Play Store
            </a>
            .
          </p>
        </Section>

        <Section title="2. Coleta de Dados">
          <p>
            O <strong>Minha Grana não coleta nenhum dado pessoal</strong>.
            Todas as informações inseridas no aplicativo, como receitas,
            despesas, categorias e metas, são armazenadas exclusivamente no
            banco de dados local do seu dispositivo e nunca saem dele.
          </p>
          <p>
            Não há servidores externos, contas de usuário, cadastros ou
            qualquer forma de transmissão de dados para a internet.
          </p>
        </Section>

        <Section title="3. Armazenamento Local">
          <p>
            Todos os seus dados financeiros ficam salvos localmente no seu
            smartphone. Isso significa que:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Seus dados pertencem exclusivamente a você.</li>
            <li>Nenhuma informação é enviada a terceiros.</li>
            <li>
              O Android realiza backup automático dos dados do aplicativo na sua
              conta do Google, permitindo restaurar suas informações ao trocar
              de dispositivo ou reinstalar o app.
            </li>
          </ul>
        </Section>

        <Section title="4. Permissões do Dispositivo">
          <p>
            O Minha Grana solicita apenas as permissões estritamente necessárias
            para seu funcionamento. Nenhuma permissão de rede, localização,
            contatos ou câmera é requerida para o uso do aplicativo.
          </p>
        </Section>

        <Section title="5. Código Aberto">
          <p>
            O Minha Grana é um projeto de código aberto distribuído sob a{" "}
            <strong>Licença MIT</strong>. Qualquer pessoa pode inspecionar,
            modificar e redistribuir o código-fonte, o que garante total
            transparência sobre o funcionamento do aplicativo e a ausência de
            coleta de dados.
          </p>
        </Section>

        <Section title="6. Crianças e Adolescentes">
          <p>
            Como o aplicativo não coleta nenhum dado, ele não representa risco
            à privacidade de usuários de qualquer faixa etária. Ainda assim, o
            uso por menores deve ocorrer com a supervisão de um responsável.
          </p>
        </Section>

        <Section title="7. Alterações nesta Política">
          <p>
            Eventuais atualizações nesta política serão publicadas nesta página.
            Como não há coleta de dados, alterações futuras tendem a refletir
            apenas mudanças técnicas ou legais, sem impacto na sua privacidade.
          </p>
        </Section>

        <Section title="8. Contato">
          <p>
            Dúvidas ou sugestões sobre esta política podem ser abertas
            diretamente no repositório público do projeto ou enviadas por
            e-mail:
          </p>
          <div className="mt-3 bg-gray-50 rounded-lg p-4 text-sm space-y-1">
            <p>
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:leonardo.behnck@gmail.com"
                className="text-[#19c746] underline"
              >
                leonardo.behnck@gmail.com
              </a>
            </p>
            <p>
              <strong>Aplicativo:</strong>{" "}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19c746] underline"
              >
                Minha Grana na Google Play
              </a>
            </p>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="bg-[#19c746] py-6 px-4 text-center text-sm text-white">
        Minha Grana - Licença MIT.
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
