import ContactusPage from '@/component/contactusPage'
import LayoutPage from '@/component/layout';
import React from 'react'

const Contact = () => {
  return (
    <ContactusPage/>
  )
}

Contact.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Contact
