// components/Carrosel.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    eyebrow: 'Frescos. Selecionados. Entregues.',
    title: 'Dinho\nPeixaria',
    subtitle: 'Os melhores peixes e frutos do mar frescos do Brasil, direto na sua mesa.',
    image: '/carrossel/1.png',
    cta: { label: 'Ver produtos', href: '/produtos' },
    ctaSecondary: { label: 'Fale conosco', href: '/contato' },
  },
  {
    id: 2,
    eyebrow: 'Direto da Patagônia',
    title: 'Frutos do\nMar Premium',
    subtitle: 'Camarão argentino, centolla, salmão e muito mais com qualidade incomparável.',
    image: '/carrossel/2.png',
    cta: { label: 'Ver produtos', href: '/produtos' },
    ctaSecondary: null,
  },
  {
    id: 3,
    eyebrow: 'Entrega rápida',
    title: 'Na sua\nMesa Hoje',
    subtitle: 'Frete grátis para compras acima de R$ 150,00. Temperatura controlada do início ao fim.',
    image: '/carrossel/3.png',
    cta: { label: 'Aproveitar oferta', href: '/produtos' },
    ctaSecondary: null,
  },
]

export default function Carrosel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 600)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section
      className="hero-banner"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '520px' }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === current ? 1 : 0,
            transition: 'opacity 0.6s ease',
            pointerEvents: index === current ? 'auto' : 'none',
          }}
        >
          {/* Imagem de fundo */}
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />

          {/* Overlay escuro gradiente da esquerda */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(0,19,64,0.88) 0%, rgba(0,19,64,0.55) 55%, rgba(0,19,64,0.15) 100%)',
            }}
          />

          {/* Linha decorativa laranja lateral */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: 'var(--orange)',
            }}
          />
        </div>
      ))}

      {/* Conteúdo — sobre todos os slides */}
      <div
        className="container-custom"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          minHeight: '520px',
          padding: '80px 20px',
        }}
      >
        <div style={{ maxWidth: '560px' }}>
          {/* Eyebrow */}
          <p
            key={`eyebrow-${current}`}
            style={{
              color: 'var(--orange)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-heading), Oswald, sans-serif',
              marginBottom: '12px',
              animation: 'fadeUp 0.5s ease both',
            }}
          >
            {slides[current].eyebrow}
          </p>

          {/* Título */}
          <h1
            key={`title-${current}`}
            className="text-white"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              whiteSpace: 'pre-line',
              marginBottom: '16px',
              animation: 'fadeUp 0.55s ease 0.05s both',
            }}
          >
            {slides[current].title.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1
                  ? <><span style={{ color: 'var(--orange)' }}>{line}</span></>
                  : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>

          {/* Subtítulo */}
          <p
            key={`sub-${current}`}
            style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '1rem',
              lineHeight: 1.7,
              marginBottom: '32px',
              animation: 'fadeUp 0.6s ease 0.1s both',
            }}
          >
            {slides[current].subtitle}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${current}`}
            className="flex flex-wrap gap-3"
            style={{ animation: 'fadeUp 0.65s ease 0.15s both' }}
          >
            <Link href={slides[current].cta.href} className="btn-secondary">
              {slides[current].cta.label}
            </Link>
            {slides[current].ctaSecondary && (
              <Link href={slides[current].ctaSecondary!.href} className="btn-outline">
                {slides[current].ctaSecondary!.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Setas de navegação */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'rgba(0,0,0,0.35)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          color: '#fff',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background 0.2s ease, border-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--orange)'
          e.currentTarget.style.borderColor = 'var(--orange)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.35)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
        }}
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Próximo slide"
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'rgba(0,0,0,0.35)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          color: '#fff',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background 0.2s ease, border-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--orange)'
          e.currentTarget.style.borderColor = 'var(--orange)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.35)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
        }}
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 20,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Ir para slide ${index + 1}`}
            style={{
              height: '3px',
              width: index === current ? '32px' : '12px',
              background: index === current ? 'var(--orange)' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'width 0.3s ease, background 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Animação keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}