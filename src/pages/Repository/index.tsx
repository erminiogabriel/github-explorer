import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="Diego"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
