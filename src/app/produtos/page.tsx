// app/produtos/page.tsx
'use client'

import { useState } from 'react'
import CardProduto from "@/components/CardProduto"
import produtos from "../../../produtos.json"

export default function ProdutosPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDestaque, setFilterDestaque] = useState(false)
  const [orderBy, setOrderBy] = useState('')

  let produtosFiltrados = [...produtos]

  if (searchTerm) {
    produtosFiltrados = produtosFiltrados.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  if (filterDestaque) {
    produtosFiltrados = produtosFiltrados.filter((p) => p.destaque === true)
  }

  if (orderBy === 'price_asc') {
    produtosFiltrados.sort((a, b) => a.price - b.price)
  } else if (orderBy === 'price_desc') {
    produtosFiltrados.sort((a, b) => b.price - a.price)
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
            Nossos Produtos
          </h1>
          <span className="divider-accent"></span>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '12px', fontSize: '1rem' }}>
            Confira nossa seleção de peixes e frutos do mar frescos
          </p>
        </div>
      </section>

      {/* ── Filtros ────────────────────────────────────────── */}
      <div className="filter-bar">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 items-end">

            <div className="flex-1 min-w-[200px]">
              <label
                className="block mb-1 font-semibold text-xs"
                style={{ color: 'var(--navy)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Buscar
              </label>
              <input
                type="text"
                placeholder="Nome do produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block mb-1 font-semibold text-xs"
                style={{ color: 'var(--navy)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Ordenar
              </label>
              <select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
                style={{ minWidth: '160px' }}
              >
                <option value="">Padrão</option>
                <option value="price_asc">Menor preço</option>
                <option value="price_desc">Maior preço</option>
              </select>
            </div>

            <div className="flex items-center" style={{ paddingBottom: '2px' }}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterDestaque}
                  onChange={(e) => setFilterDestaque(e.target.checked)}
                  className="w-4 h-4"
                  style={{ width: '16px', accentColor: 'var(--orange)' }}
                />
                <span
                  className="font-semibold text-xs"
                  style={{ color: 'var(--navy)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  Apenas destaques
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ── Listagem ───────────────────────────────────────── */}
      <div className="py-12">
        <div className="container-custom">
          {produtosFiltrados.length === 0 ? (
            <div className="text-center py-20">
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
                Nenhum produto encontrado.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm" style={{ color: 'var(--muted)' }}>
                Mostrando <strong style={{ color: 'var(--navy)' }}>{produtosFiltrados.length}</strong> de {produtos.length} produtos
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {produtosFiltrados.map((produto) => (
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}