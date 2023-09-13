function CardCep(dataCep) {
  const {
    cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
    ddd,
  } = dataCep;

  console.log(dataCep)
  console.log(dataCep.uf);

  return (
    <div className="card-cep">
      <h2>CEP: {cep}</h2>
      <p>Logradouro: {logradouro}</p>
      <p>Complemento: {complemento}</p>
      <p>Bairro: {bairro}</p>
      <p>Localidade: {localidade}</p>
      <p>UF: {uf}</p>
      <p>DDD: {ddd}</p>
    </div>
  )
}

export default CardCep;
