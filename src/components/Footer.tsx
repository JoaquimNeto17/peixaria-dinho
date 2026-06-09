// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer py-10 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="flex items-center justify-center w-8 h-8 text-base"
                style={{ background: 'var(--orange)' }}
              >
                🐟
              </span>
              <span
                className="font-bold text-white text-lg"
                style={{ fontFamily: 'var(--font-heading), Oswald, sans-serif', letterSpacing: '0.06em' }}
              >
                DINHO PEIXARIA
              </span>
            </div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
              A melhor peixaria do Brasil, com produtos frescos desde 1990.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-white font-bold text-sm mb-4"
              style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Início' },
                { href: '/produtos', label: 'Produtos' },
                { href: '/contato', label: 'Contato' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3
              className="text-white font-bold text-sm mb-4"
              style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Contato
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <li>📞 (13) 99999-9999</li>
              <li>✉️ contato@dinhopeixaria.com.br</li>
              <li>📍 Santos / SP</li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h3
              className="text-white font-bold text-sm mb-4"
              style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Funcionamento
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <li>Seg – Sex: 08h – 20h</li>
              <li>Sábado: 08h – 18h</li>
              <li>Domingo: 09h – 14h</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 text-center text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.4)'
          }}
        >
          © {new Date().getFullYear()} Dinho Peixaria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}