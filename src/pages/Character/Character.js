import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
  FaSpinner,
  FaGlobeAmericas,
  FaVenusMars,
  FaHome,
  FaTrophy,
  FaUserCircle,
  FaAward,
  FaArrowLeft,
} from 'react-icons/fa';

import api from '../../services/api';

import {Centered} from '../../components/Centered/Centered';
import {Container, Loading, CharacterDetails, BackButton} from './styles';

const Character = ({match}) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function handleSearch() {
      setLoading(true);
      const {name} = match.params;

      if (name) {
        const response = await api.get(`/v2/characters/${name}.json`);

        if (response.data.characters.error) {
          setNotFound(true);
        } else if (response.data) {
          const [titleFormatted] = response.data.characters.data.title.split(
            '('
          );

          setCharacter({
            ...response.data.characters.data,
            titleFormatted,
          });
        }
      }
      setLoading(false);
    }

    handleSearch();
  }, [match.params]);

  return (
    <Centered>
      {loading ? (
        <Loading>
          <FaSpinner size={42} color="#fff" />
        </Loading>
      ) : (
        <Container isOnline={character.status === 'online'}>
          {notFound ? (
            <>
              <h1>Character Not Found!</h1>
              <BackButton>
                <Link to="/">
                  <FaArrowLeft size={10} color="#447ae5" />
                  <span>Back</span>
                </Link>
              </BackButton>
            </>
          ) : (
            <>
              <h1>{character.name}</h1>
              <span>
                {character.vocation} Level {character.level}
              </span>
              <p>{character.comment}</p>

              <BackButton>
                <Link to="/">
                  <FaArrowLeft size={10} color="#447ae5" />
                  <span>Back</span>
                </Link>
              </BackButton>

              <CharacterDetails>
                <div>
                  <FaGlobeAmericas size={34} color="#227" />
                  <div>
                    <span>World</span>
                    <p>{character.world}</p>
                  </div>
                </div>

                <div>
                  <FaVenusMars size={34} color="#227" />
                  <div>
                    <span>Gender</span>
                    <p>{character.sex}</p>
                  </div>
                </div>

                <div>
                  <FaHome size={34} color="#227" />
                  <div>
                    <span>Residence</span>
                    <p>{character.residence}</p>
                  </div>
                </div>

                <div>
                  <FaTrophy size={34} color="#227" />
                  <div>
                    <span>Achievements</span>
                    <p>{character.achievement_points}</p>
                  </div>
                </div>

                <div>
                  <FaAward size={34} color="#227" />
                  <div>
                    <span>Title</span>
                    <p>{character.titleFormatted}</p>
                  </div>
                </div>

                <div>
                  <FaUserCircle size={34} color="#227" />
                  <div>
                    <span>{character.account_status}</span>
                    <p>
                      <span>{character.status}</span>
                    </p>
                  </div>
                </div>
              </CharacterDetails>
            </>
          )}
        </Container>
      )}
    </Centered>
  );
};

export default Character;
