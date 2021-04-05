import { useEffect, useState } from 'react';
import kusorepMan from './images/kusorep_man.png'
import './App.css';
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';

type Input = {
  name: String
}

const NEW_ROOM_AND_MEMBER = gql`
  mutation NewRoomAndMember($input: Input) {
    newRoomAndMember(input: $input) {
      room {
        id
      }
      member {
        name
      }
    }
  }
`;

const TopPage = () => {
  const history = useHistory();
  const [newRoomAndMember, { loading, error, data }] = useMutation(NEW_ROOM_AND_MEMBER);
  const [organizerName, setOrganizerName] = useState('')

  useEffect(() => {
    console.log(data)
    if (!loading && data) history.push(`/rooms/${data.newRoom.room.id}`)
  }, [loading, data])
  return (
    <>
      <div>
        <h1>クソリプメーカー</h1>
        <p>あなたも品性のあるクソリプを</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          newRoomAndMember({variables: {
            name: organizerName
          }})
        }}
        className="form-panel"
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={organizerName}
            onChange={(e) => setOrganizerName(e.target.value)}
            placeholder="あなたの名前"
          />
        </div>
        <button
          className="btn btn-blue btn-lg"
          type="submit"
        >
          ルームを作成する
        </button>
      </form>
      <div><img src={kusorepMan} alt="クソリプマン"/></div>
    </>
  );
}

export default TopPage;
