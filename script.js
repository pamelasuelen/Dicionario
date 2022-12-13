function carregaDicionario() { 
  var biografias = {
   "bio01": {
     "nome": "Marielle Franco",
     "imagem": "https://i.postimg.cc/8fS8KSGX/marielle-franco.png",
     "descricao": "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma soci&oacute;loga, feminista, militante dos direitos humanos e pol&iacute;tica brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a elei&ccedil;&atilde;o municipal de 2016, com a quinta maior vota&ccedil;&atilde;o. Cr&iacute;tica da interven&ccedil;&atilde;o federal no Rio de Janeiro e da Pol&iacute;cia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de mar&ccedil;o de 2018, foi assassinada a tiros.",
     "citacao": "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?"
   },
   "bio02": {
     "nome": "Lélia Gonzalez",
     "imagem": "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
     "descricao": "L&eacute;lia Gonzalez foi uma intelectual, pol&iacute;tica, professora e antrop&oacute;loga brasileira.Ajudou a fundar institui&ccedil;&otilde;es como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N&#39;Zinga e o Olodum. Sua milit&acirc;ncia em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas elei&ccedil;&otilde;es seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
     "citacao": "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora."
   },
   "bio03": {
     "nome": "Angela Davis",
     "imagem": "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
     "descricao": "Angela Yvonne Davis &eacute; uma professora e fil&oacute;sofa socialista estado-unidense que alcan&ccedil;ou notoriedade mundial na d&eacute;cada de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua milit&acirc;ncia pelos direitos das mulheres e contra a discrimina&ccedil;&atilde;o social e racial nos Estados Unidos e por ser personagem de um dos mais pol&ecirc;micos e famosos julgamentos criminais da recente hist&oacute;ria dos Estados Unidos.",
     "citacao": "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar."
   },
   "bio04": {
     "nome": "Conceição Evaristo",
     "imagem": "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
     "descricao": "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
     "citacao": "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos."
   },
   "bio05": {
     "nome": "Carolina de Jesus",
     "imagem": "https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",
     "descricao": "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Di&aacute;rio de uma Favelada publicado em 1960.<br><br>Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canind&eacute;, na zona norte de S&atilde;o Paulo, sustentando a si mesma e seus tr&ecirc;s filhos como catadora de pap&eacute;is. Em 1958 tem seu di&aacute;rio publicado sob o nome Quarto de Despejo, com aux&iacute;lio do jornalista Aud&aacute;lio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze l&iacute;nguas.",
     "citacao": "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é."
   },
   "bio06": {
     "nome": "Rosa Parks",
     "imagem": "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
     "descricao": "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira\r\nnegra\r\nnorte-americana, s&iacute;mbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1&ordm; de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no &ocirc;nibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos &ocirc;nibus de Montgomery e posteriormente viria a marcar o in&iacute;cio da luta antissegregacionista.",
     "citacao": "⁠Você nunca deve ter medo do que está fazendo quando está certo."
   }
 };
   
 var content = document.getElementById('content');
   for(var bio in biografias){
     content.innerHTML+=
       '<div class="card">' + '<img src="' + biografias[bio].imagem  +  '"/>' + '<details>' + 
         '<summary>' + biografias[bio].nome + '</summary>' + '<p>' +  
       biografias[bio].descricao + '</p>' + '<blockquote><q>' + biografias[bio].citacao + '</q></blockquote>' + 
       '</details></div>';
   }
 }
 
 carregaDicionario();