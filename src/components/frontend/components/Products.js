import React from 'react'
import Minerals from './Minerals'
import Wood from './Wood'
import { useTranslation } from 'react-i18next'

function Products() {
  const { t } = useTranslation(['product'])
  return (
    <section>
      <h1 className="text-4xl font-bold pt-5 mb-5 text-center">
        <span className="text-[#36B34B] uppercase">{t('title')} </span>
        <span className="text-[#F5921E] uppercase">{t('title1')}</span>
      </h1>
      <Wood />
      <Minerals />
    </section>
  )
}

export default Products
