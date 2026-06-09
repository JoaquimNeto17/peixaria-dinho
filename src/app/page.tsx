// app/page.tsx
import Carrosel from "@/components/Carrosel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"
import Link from "next/link"

export default function Home() {
  const produtosEmDestaque = produtos.filter((p) => p.destaque === true)

  return (
    <div className="min-h-screen" style={{ background: 'var(--white)' }}>

      {/* ── Carrossel hero ────────────────────────────────── */}
      <Carrosel />

      {/* ── Destaques ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="section-title">Produtos em Destaque</h2>
            <span className="divider-accent"></span>
            <p className="section-subtitle">Os produtos mais frescos e selecionados para você</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {produtosEmDestaque.map((produto) => (
              <CardProduto
                key={produto.id}
                id={produto.id}
                title={produto.title}
                description={produto.description}
                price={produto.price}
                imageSrc={produto.imageSrc}
                destaque={produto.destaque}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/produtos" className="btn-primary">
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Banner promocional ────────────────────────────── */}
      <section className="promo-banner py-14">
        <div className="container-custom text-center">
          <p
            className="text-sm font-bold mb-2"
            style={{
              color: 'rgba(255,255,255,0.75)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-heading), Oswald, sans-serif',
            }}
          >
            Promoção
          </p>
          <h2
            className="font-bold mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Frete Grátis
          </h2>
          <p className="text-lg mb-7" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Para compras acima de R$ 150,00
          </p>
          <Link href="/produtos" className="btn-primary">
            Aproveitar oferta
          </Link>
        </div>
      </section>

      {/* ── Diferenciais ──────────────────────────────────── */}
      <section className="section-cream py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🌊', title: 'Frescor Garantido', desc: 'Produtos recebidos diariamente, direto dos fornecedores.' },
              { icon: '🚚', title: 'Entrega Rápida', desc: 'Entregamos em toda a região com temperatura controlada.' },
              { icon: '⭐', title: 'Qualidade Premium', desc: 'Seleção rigorosa para garantir o melhor para sua mesa.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6"
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderTop: '3px solid var(--orange)',
                }}
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading), Oswald, sans-serif',
                    fontSize: '1.1rem',
                    color: 'var(--navy)',
                    marginBottom: '8px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.65' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}