import Header from 'components/Header'
import RowMovies from 'components/RowMovies'
import SuperBanner from 'components/SuperBanner'

import SlickStyle from '../styles/slick'
import SlickThemeStyle from '../styles/slick-theme'

export default function Catalog() {
  return (
    <>
      <SlickStyle />
      <SlickThemeStyle />
      <Header menuShow />
      <SuperBanner />
      <RowMovies title="Minha Lista" />
      <RowMovies title="Dicas para você" />
      <RowMovies title="Séries para maratonar" />
    </>
  )
}
