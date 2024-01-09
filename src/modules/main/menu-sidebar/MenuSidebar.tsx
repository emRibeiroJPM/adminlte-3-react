import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {MenuItem} from '@components';
import {PfImage} from '@profabric/react-components';
import styled from 'styled-components';
import {SidebarSearch} from '@app/components/sidebar-search/SidebarSearch';


export interface IMenuItem {
  name: string;
  icon?: string;
  path?: string;
  children?: Array<IMenuItem>;
}

export const MENU: IMenuItem[] = [
  {
    name: 'Dados Gerais',
    icon: 'fas fa-tachometer-alt nav-icon',
    path: '/'
  },
  {
    name: 'Secções de Produção',
    icon: 'fas fa-industry nav-icon',
    children: [
      {
        name: ' Estado Tanques',
        icon: 'fas fa-solid fa-water',
        path: '/estadoTanques'
      },
      {
        name: ' Controlo Qualidade',
        icon: 'fas fa-solid fa-flask',
        path: '/amostrasControloQualidade'
      },
      {
        name: ' Ordem Enchimento',
        icon: 'fas fa-solid fa-fill',
        path: '/ordemEnchimento'
      },
      {
        name: ' Ordem Rotulagem',
        icon: 'fas fa-solid fa-tag',
        path: '/ordemRotulagem'
      },

    ]
  },
  {
    name: 'Utilizadores',
    icon: 'fas fa-users nav-icon',
    children:[
      {
        name: 'Utilizador 1',
        icon: 'fas fa-user nav-icon',
        path: '/utilizador-1'
      },
      {
        name: 'Utilizador 2',
        icon: 'fas fa-user nav-icon',
        path: '/utilizador-2'
      },
      {
        name: 'Utilizador 3',
        icon: 'fas fa-user nav-icon',
        path: '/utilizador-3'
      },
      {
        name: 'Administador',
        icon: 'fas fa-user-cog nav-icon',
        path: '/administrador'
      }
    ]
  }
];

const StyledBrandImage = styled(PfImage)`
  float: left;
  line-height: 0.8;
  margin: -1px 8px 0 6px;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

const StyledUserImage = styled(PfImage)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const MenuSidebar = () => {
  const authentication = useSelector((state: any) => state.auth.authentication);
  const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);
  const menuItemFlat = useSelector((state: any) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state: any) => state.ui.menuChildIndent);

  return (
    <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
      <Link to="/" className="brand-link">
        <StyledBrandImage
          src="/img/jpm logo.png"
          alt="JPM Logo"
          width={80}
          height={33}

        />
        <span className="brand-text font-weight-light">EgiBoard</span>
      </Link>
      <div className="sidebar">
        
        <div className="form-inline">
          <SidebarSearch />
        </div>

        <nav className="mt-2" style={{overflowY: 'hidden'}}>
          <ul
            className={`nav nav-pills nav-sidebar flex-column${
              menuItemFlat ? ' nav-flat' : ''
            }${menuChildIndent ? ' nav-child-indent' : ''}`}
            role="menu"
          >
            {MENU.map((menuItem: IMenuItem) => (
              <MenuItem
                key={menuItem.name + menuItem.path}
                menuItem={menuItem}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default MenuSidebar;
