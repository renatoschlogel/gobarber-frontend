import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast/Toast';
import { Container } from './ToastContainer.styles';
import { ToastMessage } from '../../hooks/toastContext';

interface ToastContainerData {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerData> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
