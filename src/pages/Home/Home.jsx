import React, { useState } from 'react';
import Splash from './Splash';
import Nav from '../../components/common/Nav';
import Hero from './Hero';
import Pillars from './Pillars';
import Works from './Works';
import { BrandsMarquee  } from './BrandMarquee';
import { Play, Orbit, Systems } from './Sections';
import { Footer } from '../../components/common/Footer';

const Home = () => {
  return (
    <>
      <Splash />   {/* ← always shows first, then unmounts itself */}
      <Nav />
      <main>
        <section id="top"><Hero /></section>
        <section id="design"><Works /></section>
        <section id="orbit"><Orbit /></section>

        <section id="film"><Pillars /></section>
        <section id="work"><Play /></section>
        <section id="brands"><BrandsMarquee /></section>
        <section id="systems"><Systems /></section>
      </main>
      <Footer />
    </>
  );
};

export default Home;