import React from 'react'
import './skill.css'
import Html from '../../assets/icons/html'
import Javascrip from '../../assets/icons/javascrip'
import Typescrip from '../../assets/icons/typescrip'
import Css from '../../assets/icons/css'
import Sass from '../../assets/icons/sass'
import Python from '../../assets/icons/python'
import Nuxtjs from '../../assets/icons/nuxtjs'
import Vuejs from '../../assets/icons/vuejs'
import Flutter from '../../assets/icons/flutter'
import Nestjs from '../../assets/icons/nestjs'
import Reacrjs from '../../assets/icons/reactjs'
import Mongodb from '../../assets/icons/mongodb'
import Mysql from '../../assets/icons/mysql'
import Firebase from '../../assets/icons/firebase'
import Figma from '../../assets/icons/figma'
import Photoshop from '../../assets/icons/photoshop'
import Postman from '../../assets/icons/postman'

export default function Skill() {
  return (
    <div className='space-y-16'>
      <div className="flex justify-around">
        <div className='text-center space-y-8'>
          <p>Programming Languages</p>
          <div className='grid grid-cols-6 gap-10'>
            <div className='text-center space-y-3'>
              <Html/>
              <p>HTML</p>
            </div>
            <div className='text-center space-y-3'>
              <Javascrip/>
              <p>Javascrip</p>
            </div>
            <div className='text-center space-y-3'>
              <Typescrip className="w-[75px] h-[75px]"/>
              <p>Typescrip</p>
            </div>
            <div className='text-center space-y-3'>
              <Css/>
              <p>Css</p>
            </div>
            <div className='text-center space-y-3'>
              <Sass/>
              <p>Sass</p>
            </div>
            <div className='text-center space-y-3'>
              <Python/>
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className='text-center space-y-8'>
          <p>Framework</p>
          <div className='grid grid-cols-5 gap-10'>
            <div className='text-center space-y-3'>
              <Vuejs/>
              <p>Vue.js</p>
            </div>
            <div className='text-center space-y-3'>
              <Nuxtjs/>
              <p>Nuxt.js</p>
            </div>
            <div className='text-center space-y-3'>
              <Reacrjs/>
              <p>Reacr.js</p>
            </div>
            <div className='text-center space-y-3'>
              <Flutter/>
              <p>Flutter</p>
            </div>
            <div className='text-center space-y-3'>
              <Nestjs/>
              <p>Nest.js</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className='text-center space-y-8'>
          <p>Databescs</p>
          <div className='grid grid-cols-3 gap-10'>
            <div className='text-center space-y-3'>
              <Mongodb/>
              <p>MongoDB</p>
            </div>
            <div className='text-center space-y-3'>
              <Mysql/>
              <p>MySQL</p>
            </div>
            <div className='text-center space-y-3'>
              <Firebase/>
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className='text-center space-y-8'>
          <p>Tools</p>
          <div className='grid grid-cols-3 gap-10'>
            <div className='text-center space-y-3'>
              <Figma/>
              <p>Figma</p>
            </div>
            <div className='text-center space-y-3'>
              <Photoshop/>
              <p>PhotoShop</p>
            </div>
            <div className='text-center space-y-3'>
              <Postman/>
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
