import { useEffect, useState } from 'react';
import kusorepMan from './images/kusorep_man.png'
import './App.css';
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const NEW_ROOM = gql`
  mutation {
    newRoom(input: {}) {
      room {
        id
      }
    }
  }
`

const TopPage = () => {
  const history = useHistory();
  const [newRoom, { loading, error, data }] = useMutation(NEW_ROOM);

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
      <button
        className="btn btn-blue btn-lg"
        type="submit"
        onClick={() => {
          newRoom()
        }}
      >
        ルームを作成する
      </button>
      <div><img src={kusorepMan} alt="クソリプマン"/></div>
    </>
  );
}

export default TopPage;
