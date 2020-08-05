import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0} style={{ background: '#141414' }}>
      {dadosIniciais.length === 0 && <div>Carregando...</div>}
      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription="Você sabe o que é podcast?"
          />

          <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
        </>
      )}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) return <></>;

        return <Carousel key={`carousel_${categoria.titulo}`} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
