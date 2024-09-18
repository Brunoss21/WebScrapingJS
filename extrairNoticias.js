//Cole o código abaixo no https://ovicio.com.br/category/filmes/ para extrair o titulo, subtitulo e data de publicação das noticias.

// Seleciona todos os blocos de notícias
const articles = document.querySelectorAll('.cols'); 

articles.forEach(article => {
  const titleElement = article.querySelector('.loop__item__title a'); // Seleciona o título da notícia
  const subtitleElement = article.querySelector('p'); // Seleciona o subtítulo (descrição curta)
  const dateElement = article.querySelector('time'); // Seleciona a data de publicação

  const title = titleElement ? titleElement.textContent.trim() : 'Título não encontrado';
  const subtitle = subtitleElement ? subtitleElement.textContent.trim() : 'Subtítulo não encontrado';
  const date = dateElement ? dateElement.textContent.trim() : 'Data não informada';

  console.log(`Título: ${title}\nSubtítulo: ${subtitle}\nData: ${date}\n`);
});
