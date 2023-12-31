import Link from "next/link";
import styles from "@/styles/navbar.module.css"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//이미지 파일 임포트
import Image from "next/image"
import Logo from "/public/image/logo.png"
import Search from "/public/image/search.svg"
import Account from "/public/image/account.svg"

export default function Navbar(){

  const router = useRouter();

    // 검색 바 스크립트

    useEffect(() => {
      const Search = document.querySelector('.search');
      const Background = document.querySelector('.background');
      const Overlay = document.querySelector('.overlay');
      const body = document.querySelector('body');
      const hamburgerButton = document.querySelector('.hamburger-button');
      const menuButton = document.querySelector('.menu');
    
      if (Search) {
        Search.addEventListener('click', function(event) {
          event.preventDefault();
          Search.classList.toggle('active');
          Overlay.classList.toggle('visible');
          Background.classList.toggle('visible');
          body.classList.toggle('active');
        });
      }
      
    
      Background.addEventListener('click', function(event) {
        event.preventDefault();
    
        Background.classList.toggle('active');
        Overlay.classList.toggle('visible');
        Background.classList.toggle('visible');
        body.classList.toggle('active');
      });
    
      function toggleOverlayMenu() {
        var overlayMenu = document.querySelector('.overlay-menu');
        overlayMenu.classList.toggle('visible');
        hamburgerButton.classList.toggle('active');
        body.classList.toggle('active');
      }
    
      if (hamburgerButton && menuButton) {
        hamburgerButton.addEventListener('click', toggleOverlayMenu);
        menuButton.addEventListener('click', function(event) {
          event.preventDefault();
    
          var overlay = document.querySelector('.overlay-menu');
          overlay.classList.remove('visible');
          hamburgerButton.classList.remove('active');
          body.classList.remove('active');
          
        });
      }
    }, []);
    

    
    return (
    <div className={styles.default}>
        <div className={styles.headerbg}></div>
        <div className={styles.headercontainer}>
            <div className={styles.headeritem}>
                <Link href="/"><Image className={styles.logo} src={Logo} alt="MAZDA" priority/></Link>
                <div className={styles.menus}>
                    <Link className={styles.menu} href="/">HOME</Link>
                    <Link className={styles.menu} href="/about">ABOUT</Link>
                    <Link className={styles.menu} href="/innovation">INNOVATION</Link>
                    <Link className={styles.menu} href="/support">SUPPORT</Link>
                </div>
                <div className="icons">
                  <div className="search" href="/"><Image src={Search} alt="MAZDA" /></div>
                  <Link className="account" href="/login"><Image src={Account} alt="MAZDA" /></Link>
                </div>
            </div>
        </div>


  <div className="overlay">
    <section>

      <input className="searchbar"
        type="text"
        id="search"
        placeholder="마쓰다에 대한 모든 것을 검색해보세요."
        autoComplete="off"
      />
    </section>
    <div className="background"></div>

  </div>

  <div className="hamburger-button">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div> 

  <div className="overlay-menu">
    <nav className="menu">
      <a
            className="menu"
            onClick={() => router.push('/')}
          >
            HOME
          </a>
          <a
            className="menu"
            onClick={() => router.push('/about')}
          >
            ABOUT
          </a>
          <a
            className="menu"
            onClick={() => router.push('/innovation')}
          >
            INNOVATION
          </a>
          <a
            className="menu"
            onClick={() => router.push('/support')}
          >
            SUPPORT
          </a>
    </nav>
  </div>
  </div>
    )
    
}

