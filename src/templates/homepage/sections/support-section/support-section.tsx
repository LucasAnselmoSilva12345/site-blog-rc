import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react';

const supportFeatures = [
  {
    icon: PaintbrushVertical,
    title: 'Personalize seu site',
    content:
      'Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.',
    cardBg: 'bg-blue-400',
    iconBg: 'bg-blue-300',
  },
  {
    icon: Store,
    title: 'Venda de qualquer loja',
    content:
      'Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.',
    cardBg: 'bg-cyan-300',
    iconBg: 'bg-cyan-200',
  },
  {
    icon: HeartHandshake,
    title: 'Receba suporte amigável',
    content:
      'Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.',
    cardBg: 'bg-blue-400',
    iconBg: 'bg-blue-300',
  },
];

export function SupportSection() {
  return (
    <section className="relative pb-8 md:py-10">
      <div className='absolute md:inset-0 md:block bg-[url("/background-features.svg")] md:bg-cover md:bg-center md:bg-no-repeat md:opacity-90' />

      <div className="container relative flex flex-col items-center gap-12">
        <h2 className="text-balance text-center text-heading-xl text-gray-100 font-sans">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {supportFeatures.map(
            ({ icon: Icon, title, content, cardBg, iconBg }) => (
              <div
                className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${cardBg}`}
                key={title}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBg} mb-4`}
                >
                  <Icon className="h-6 w-4 text-white" />
                </div>
                <strong className="text-heading-sm text-gray-100">
                  {title}
                </strong>
                <p className="text-body-sm text-gray-200">{content}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
