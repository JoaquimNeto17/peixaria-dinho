// app/contato/page.tsx
'use client'

import { useState } from 'react'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('enviando')
    setTimeout(() => {
      setStatus('sucesso')
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' })
      setTimeout(() => setStatus(''), 4000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--white)' }}>

      {/* ── Cabeçalho ─────────────────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '48px 0' }}>
        <div className="container-custom">
          <h1
            className="text-white mb-1"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}
          >
            Contato
          </h1>
          <span className="divider-accent"></span>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '12px', fontSize: '1rem' }}>
            Fale conosco, tire suas dúvidas ou faça seu pedido
          </p>
        </div>
      </section>

      {/* ── Conteúdo ───────────────────────────────────────── */}
      <div className="py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Informações */}
            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-heading), Oswald, sans-serif',
                  fontSize: '1.4rem',
                  color: 'var(--navy)',
                  letterSpacing: '0.04em',
                }}
              >
                Informações de Contato
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Endereço',
                    content: 'Rua dos Pescadores, 123\nCentro, Santos/SP — CEP 11000-000',
                  },
                  {
                    title: 'Telefone',
                    content: '(13) 99999-9999\n(13) 3333-3333',
                  },
                  {
                    title: 'E-mail',
                    content: 'contato@dinhopeixaria.com.br\nvendas@dinhopeixaria.com.br',
                  },
                  {
                    title: 'Horário de Funcionamento',
                    content: 'Segunda a Sexta: 08h às 20h\nSábado: 08h às 18h\nDomingo: 09h às 14h',
                  },
                ].map((item) => (
                  <div key={item.title} className="contact-item">
                    <h3>{item.title}</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulário */}
            <div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-heading), Oswald, sans-serif',
                  fontSize: '1.4rem',
                  color: 'var(--navy)',
                  letterSpacing: '0.04em',
                }}
              >
                Envie uma Mensagem
              </h2>

              {status === 'sucesso' && (
                <div
                  className="mb-6 px-4 py-3 text-sm"
                  style={{
                    background: '#EDFAF2',
                    border: '1px solid #6DD49A',
                    color: '#1A6640',
                    borderLeft: '3px solid #2CAA6A',
                  }}
                >
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: 'Nome Completo', name: 'nome', type: 'text', required: true },
                  { label: 'E-mail', name: 'email', type: 'email', required: true },
                  { label: 'Telefone', name: 'telefone', type: 'tel', required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      className="block mb-1 text-xs font-bold"
                      style={{ color: 'var(--navy)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      {field.label} {field.required && '*'}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block mb-1 text-xs font-bold"
                    style={{ color: 'var(--navy)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'enviando'}
                  className="btn-primary w-full"
                  style={{ opacity: status === 'enviando' ? 0.6 : 1, cursor: status === 'enviando' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mapa ───────────────────────────────────────────── */}
      <div className="section-cream py-14">
        <div className="container-custom">
          <h2
            className="text-center mb-8"
            style={{
              fontFamily: 'var(--font-heading), Oswald, sans-serif',
              fontSize: '1.4rem',
              color: 'var(--navy)',
              letterSpacing: '0.04em',
            }}
          >
            Onde Estamos
          </h2>
          <div
            className="flex items-center justify-center"
            style={{
              height: '360px',
              background: '#E8E6DF',
              border: '1px solid var(--border)',
              borderTop: '3px solid var(--orange)',
            }}
          >
            <div className="text-center">
              <p style={{ color: 'var(--navy)', fontWeight: 600, marginBottom: '4px' }}>
                📍 Rua dos Pescadores, 123 — Santos/SP
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                (Insira aqui o Google Maps embed)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}