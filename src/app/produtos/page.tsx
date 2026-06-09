import CardProduto from "@/components/CardProduto"
import produtos from "../../../produtos.json"

export default function ProdutosPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Cabeçalho */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Nossos Produtos
        </h1>
        <p className="text-slate-500 mt-2">
          Confira toda a nossa seleção de pescados e frutos do mar
        </p>
      </div>

      {/* Grid de produtos */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
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
      </div>
    </div>
  )
}