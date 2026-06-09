// components/CardProduto.tsx
'use client'

import { useState } from 'react'

interface CardProdutoProps {
  id: number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque?: boolean
}

export default function CardProduto({
  id,
  title,
  description,
  price,
  imageSrc,
  destaque = false,
}: CardProdutoProps) {
  const [imageError, setImageError] = useState(false)

  const formatPrice = (value: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

  const handleComprar = () => alert(`Produto ${title} adicionado ao carrinho!`)
  const handleDetalhes = () => alert(`${title}\n\n${description}\n\nPreço: ${formatPrice(price)}`)

  return (
    <div className={`card-produto ${destaque ? 'card-destaque' : ''}`}>

      {/* Imagem */}
      <div className="relative w-full overflow-hidden" style={{ height: '220px', background: '#F0EEE8' }}>
        {!imageError ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl" style={{ background: '#F0EEE8' }}>
            🐟
          </div>
        )}

        {destaque && (
          <div className="absolute top-0 left-0">
            <span className="badge-destaque">Destaque</span>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-grow p-4">

        <h3
          className="font-bold mb-1 line-clamp-1"
          style={{
            fontFamily: 'var(--font-heading), Oswald, sans-serif',
            fontSize: '1.05rem',
            color: 'var(--navy)',
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </h3>

        <p
          className="text-sm mb-4 flex-grow line-clamp-2"
          style={{ color: 'var(--muted)', lineHeight: '1.55' }}
        >
          {description}
        </p>

        {/* Preço */}
        <div className="mb-4">
          <span
            className="font-bold"
            style={{ fontSize: '1.4rem', color: 'var(--navy)' }}
          >
            {formatPrice(price)}
          </span>
          <p style={{ fontSize: '0.75rem', color: '#AAAAAA', marginTop: '2px' }}>
            ou 3× de {formatPrice(price / 3)} sem juros
          </p>
        </div>

        {/* Botões */}
        <div className="flex gap-2">
          <button
            onClick={handleDetalhes}
            className="flex-1 py-2 text-sm font-semibold transition-colors duration-200"
            style={{
              background: 'transparent',
              border: '1.5px solid var(--navy)',
              color: 'var(--navy)',
              fontFamily: 'var(--font-heading), Oswald, sans-serif',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = 'var(--navy)'
              el.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = 'transparent'
              el.style.color = 'var(--navy)'
            }}
          >
            Detalhes
          </button>
          <button
            onClick={handleComprar}
            className="flex-1 py-2 text-sm font-semibold text-white transition-colors duration-200"
            style={{
              background: 'var(--orange)',
              border: '1.5px solid var(--orange)',
              fontFamily: 'var(--font-heading), Oswald, sans-serif',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--orange-dark)'
              e.currentTarget.style.borderColor = 'var(--orange-dark)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--orange)'
              e.currentTarget.style.borderColor = 'var(--orange)'
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}