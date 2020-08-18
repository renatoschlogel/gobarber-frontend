import React from 'react';

import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './ToastContainer.styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong> Erro! </strong>
          <p>Não deu certo!!!!</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong> Erro! </strong>
          <p>Não deu certo!!!!</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong> Erro! </strong>
          <p>Não deu certo!!!!</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
