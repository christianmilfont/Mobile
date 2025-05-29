export const adicionarProdutoMG = (carrinho, produto) => {
  const existente = carrinho.find(item => item.id === produto.id);
  if (existente) {
    return carrinho.map(item =>
      item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
  } else {
    return [...carrinho, { ...produto, quantidade: 1 }];
  }
};

export const removerProdutoMG = (carrinho, id) => {
  return carrinho
    .map(item =>
      item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
    )
    .filter(item => item.quantidade > 0);
};

export const limparCarrinhoMG = () => {
  return [];
};

export const totalDeItensMG = (carrinho) => {
  return carrinho.reduce((acc, item) => acc + item.quantidade, 0);
};
