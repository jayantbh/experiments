import { ReactComponent as VisaLogo } from 'assets/visa_logo.svg';
import { ReactComponent as VisaLogoRed } from 'assets/visa_logo_red.svg';
import cls from 'classnames';
import Layout from 'components/Layout';
import React, { HTMLAttributes } from 'react';

import css from './styles.module.scss';

const CARD_NUM = '9237814123973230';

const Cards = () => (
  <Layout>
    <div className={css.container}>
      <div className={css['card-wrapper']}>
        <CardWithReflection/>
        <CardWithReflection theme='red'/>
      </div>
    </div>
  </Layout>
);

type CardNestingProps = HTMLAttributes<HTMLDivElement> & { theme?: 'default' | 'red' };

const CardWithReflection = (props: CardNestingProps) => (
  <div {...props} className={cls(css[`theme--${props.theme}`], props.className)}>
    <CardWithShadow theme={props.theme}/>
    <CardWithShadow theme={props.theme} className={css.reflection}/>
  </div>
);

const CardWithShadow = (props: CardNestingProps) => (
  <div {...props} className={cls(css['card-with-shadow'], props.className)}>
    <Card theme={props.theme} className={css['absolute-card']}/>
    <Card theme={props.theme}/>
  </div>
);

const Card = (props: CardNestingProps) => (
  <div {...props} className={cls(css.card, props.className)}>
    <div className={css.backdrop}>
      {Array(4).fill(0).map((_, i) => <div className={css.abstract} key={i}/>)}
    </div>
    <div className={css.content}>
      <div className={css.header}>
        <div className={css.brand}>CoolBank</div>
        <div className={css.tag}>Rewards Card</div>
      </div>
      <div className={css.info}>
        <div className={css.number}>
          {Array(12).fill(0).map((_, i) => <div className={css.dot} key={i}/>)}
          {CARD_NUM.slice(-4).split('').map((ch, i) => <div key={i}>{ch}</div>)}
        </div>
        <div className={css.label}>Card Number</div>
      </div>
      <div className={css.footer}>
        <div className={css.user}>JAYANT BHAWAL</div>
        {props.theme === 'red' ? <VisaLogoRed/> : <VisaLogo/>}
      </div>
    </div>
    <div className={css.shimmer}/>
  </div>
);

export default Cards;
