import LayoutPage from '@/component/layout';
import ServicesPage from '@/component/servicesPage'
import React from 'react'

const Services = () => {
  return (
<ServicesPage/>
  )
}
Services.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Services
