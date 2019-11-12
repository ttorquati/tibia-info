import React, {useState, useCallback} from 'react';

import {FaSearch} from 'react-icons/fa';
import history from '../../services/history';

import {Centered} from '../../components/Centered/Centered';
import {Container, Form, SubmitButton, ErrorMessage} from './styles';

import TibiaInfoLogo from '../../assets/tibiainfo.png';

const Home = () => {
  const [character, setCharacter] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!character) {
      setErrorMessage(`We need the character's name to perform the search.`);
    } else {
      history.push(`/character/${encodeURIComponent(character)}`);
    }
  }

  const handleInputChange = useCallback(e => {
    setCharacter(e.target.value);
    setErrorMessage('');
  }, []);

  return (
    <Centered>
      <Container>
        <h1>
          <img src={TibiaInfoLogo} alt="Tibia Info" />
        </h1>

        <Form onSubmit={handleSubmit} isError={!!errorMessage}>
          <input
            type="text"
            placeholder="Search a character"
            value={character}
            onChange={handleInputChange}
          />
          <SubmitButton>
            <FaSearch size={20} color="#FFF" />
          </SubmitButton>
        </Form>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Container>
    </Centered>
  );
};

export default Home;
