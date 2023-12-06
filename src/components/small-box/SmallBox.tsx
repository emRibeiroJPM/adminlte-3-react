import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

export interface SmallBoxProps {
  type: 'info' | 'success' | 'warning' | 'danger';
  icon?: string;
  count: number;
  title: string;
  navigateTo: string;
}

const SmallBox = ({
  type = 'info',
  icon = 'ion-stats-bars',
  count,
  title,
  navigateTo
}: SmallBoxProps) => {
  const [t] = useTranslation();

/*
  const mudançaDeStatus = () => {
    let estadoAtualizado = type;

    if (count < 50) {
      estadoAtualizado = 'warning';
    } else if (count < 25) {
      estadoAtualizado = 'danger';
    } else {
      estadoAtualizado = 'success';
    }
    return estadoAtualizado;
  }
  */
  return (
    <div className={`small-box bg-${type}`}>
      <div className="inner">
        <h3>
          {count}<sup style={{fontSize: '20px'}}>%</sup>
        </h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        <i className={`ion ${icon}`}/>
      </div>
      <Link to={navigateTo} className="small-box-footer">
        <span className="mr-2">{t<string>('main.label.moreInfo')}</span>
        <i className="fa fa-arrow-circle-right" />
      </Link>
    </div>
  );
};

export default SmallBox;
