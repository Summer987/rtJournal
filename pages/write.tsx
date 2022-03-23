import React from 'react'
import {NextPage} from "next";

import {MainLayout} from "../layouts/MainLayout";
import {WriteForm} from "../components/WriteForm";

const WritePage: NextPage = () => {

  return (
    <MainLayout className='main-layout-white' hideComments hideMenu>
      <WriteForm title=''/>
    </MainLayout>

  )
}

export default WritePage