import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import '../../theme/general.scss';
import './AdminMonthlyEmission.scss';
import { IonRouterLink } from '@ionic/react';

const AdminMonthlyEmission: React.FC = () => {
  return (
    <IonCard className="card">
      <div className="card-header">
        <span className="title">Emissions – April 2025</span>
        <span className="details">
          <IonRouterLink routerLink="/admin/emissions">Details<IonIcon icon={chevronForwardOutline} className="details-icon" /></IonRouterLink>
          </span>
      </div>
      <IonCardContent>
        <IonGrid className="grid">
          <IonRow>
            <IonCol className="chemical co2">
              <div className="amount">5,800 kg</div>
              <div className="name">Carbon Dioxide</div>
            </IonCol>
            <IonCol className="chemical nox">
              <div className="amount">340 g</div>
              <div className="name">Nitrogen Oxides</div>
            </IonCol>
            <IonCol className="chemical pm">
              <div className="amount">45 g</div>
              <div className="name">Particulate Matter 2.5</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default AdminMonthlyEmission;
