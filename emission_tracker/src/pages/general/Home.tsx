import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import '../../theme/general.scss';
import './Home.css';
import Header from '../../components/general/Header';
import { IonRouterLink } from '@ionic/react';
const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen className="home-container">
        <div className="global-section">
          <h1>Global</h1>
          <div className="button-group">
            <IonRouterLink className="nav-button" routerLink="/login">Login Page</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/signup">SignUp Page</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/profile">UserProfile Page</IonRouterLink>
          </div>
        </div>
        <hr className="divider" />
        <div className="role-sections">
          <div className="role-column">
            <h1>Driver</h1>
            <IonRouterLink className="nav-button" routerLink="/driver/dashboard">Dashboard</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/driver/history">History</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/driver/timer">Timer</IonRouterLink>
          </div>

          <div className="role-column">
            <h1>Customer</h1>
            <IonRouterLink className="nav-button" routerLink="/customer/dashboard">Dashboard</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/customer/reports">Reports</IonRouterLink>
          </div>

          <div className="role-column">
            <h1>Manager</h1>
            <IonRouterLink className="nav-button" routerLink="/manager/dashboard">Dashboard</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/manager/requests">Requests</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/manager/emissions">Emissions</IonRouterLink>
          </div>

          <div className="role-column">
            <h1>Admin</h1>
            <IonRouterLink className="nav-button" routerLink="/admin/dashboard">Dashboard</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/admin/emissions">Emissions</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/admin/fleet-details">Fleet Details</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/admin/customer-requests">Requests</IonRouterLink>
            <IonRouterLink className="nav-button" routerLink="/admin/settings">Settings</IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;