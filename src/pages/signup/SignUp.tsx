import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { Container, Content, Background } from './SignUp.styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu Cadastro</h1>

        <Input name="Nome" icon={FiUser} placeholder="Nome" />
        <Input name="E-mail" icon={FiMail} placeholder="E-mail" />
        <Input name="Senha" type="password" icon={FiLock} placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="forgot">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
