import React from 'react';

import Toast from './Toast/Toast';
import { Container } from './ToastContainer.styles';
import { ToastMessage } from '../../hooks/toastContext';

interface ToastContainerData {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerData> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
