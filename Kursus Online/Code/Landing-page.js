import React from 'react'

import styles from './landing-page.module.css'

const LandingPage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['landing-page']}>
        <img
          src="/ellipse4358-auf-700h.png"
          alt="Ellipse4358"
          className={styles['ellipse4']}
        />
        <img
          src="/ellipse3357-izz-1100w.png"
          alt="Ellipse3357"
          className={styles['ellipse3']}
        />
        <img
          src="/rectangle114-8bu-1500w.png"
          alt="Rectangle114"
          className={styles['rectangle1']}
        />
        <div className={styles['group1']}>
          <span className={styles['text']}>
            <span>COURSEBOWs</span>
          </span>
          <img
            src="/ellipse116-59ol-200h.png"
            alt="Ellipse116"
            className={styles['ellipse1']}
          />
          <img
            src="/ellipse2361-06ca-200h.png"
            alt="Ellipse2361"
            className={styles['ellipse2']}
          />
        </div>
        <div className={styles['group2']}>
          <img
            src="/ellipse218-2xhu-200h.png"
            alt="Ellipse218"
            className={styles['ellipse21']}
          />
          <img
            src="/alignjustify119-bqcc.svg"
            alt="alignjustify119"
            className={styles['alignjustify1']}
          />
        </div>
        <div className={styles['group3']}>
          <span className={styles['text02']}>
            <span>Masuk</span>
          </span>
          <img
            src="/arrowright1124-ifij.svg"
            alt="arrowright1124"
            className={styles['arrowright1']}
          />
        </div>
        <div className={styles['group4']}>
          <span className={styles['text04']}>
            <span>Ayo Mulai</span>
          </span>
        </div>
        <div className={styles['group5']}>
          <span className={styles['text06']}>
            <span>Ayo Mulai</span>
          </span>
        </div>
        <span className={styles['text08']}>
          <span>
            <span>
              Belajar Apapun
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Yang Kamu Suka</span>
          </span>
        </span>
        <span className={styles['text13']}>
          <span>
            <span>
              Belajar apapun yang kamu suka sambil
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>membuat kopi dan bersantai di mana pun</span>
          </span>
        </span>
        <div className={styles['group6']}>
          <img
            src="/rectangle4138-1nfj-200h.png"
            alt="Rectangle4138"
            className={styles['rectangle4']}
          />
          <span className={styles['text18']}>
            <span>Cek Harga</span>
          </span>
        </div>
        <div className={styles['group7']}>
          <img
            src="/coffee1243-73m-400w.png"
            alt="coffee1243"
            className={styles['coffee1']}
          />
          <img
            src="/chilling1352-tseu-400h.png"
            alt="chilling1352"
            className={styles['chilling1']}
          />
          <img
            src="/opendoodlesmessy1353-nbc8-400h.png"
            alt="OpenDoodlesMessy1353"
            className={styles['open-doodles-messy1']}
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
