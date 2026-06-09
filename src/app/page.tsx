import Carrossel from "@/components/Carrosel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"

export default function Home() {

  const produtosEmDestaque = produtos.filter(produto => produto.destaque === true);

  return (
    <div className="w-full min-h-screen bg-background pb-12">
      <Carrossel />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Produtos em destaque
          </h1>
          <p className="text-muted-foreground mt-2">
            Os peixes mais frescos da região
          </p>
        </div>

        {/* GRID DE PRODUTOS - CORRIGIDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {produtosEmDestaque.map(produto => (
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