function getDadosEnderecoPorCEP(cep)
{
  let url = 'https://viacep.com.br/ws/' + cep + '/json/'

  let xmlHttp = new XMLHttpRequest()

  xmlHttp.open('GET', url)

  xmlHttp.onreadystatechange = () =>
  {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    {
      let json = JSON.parse(xmlHttp.responseText)

      document.getElementById('endereco').value = json.logradouro
      document.getElementById('bairro').value = json.bairro
      document.getElementById('cidade').value = json.localidade
      document.getElementById('uf').value = json.uf

    }

  }

  xmlHttp.send()

}