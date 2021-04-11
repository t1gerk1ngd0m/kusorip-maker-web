import './App.css';
import { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

type ID = {
  id: string
}

type ParamTypes = {
  id: string,
  memberId: string
}

type NewKusorepInput = {
  content: string
  memberId: string
}

const FETCH_ROOM_MEMBERS = gql`
  query Room($id: ID!) {
    room(id: $id) {
      theme
      members {
        id
        name
      }
    }
  }
`

const NEW_KUSOREP = gql`
  mutation NewKusorep($input: NewKusorepInput!) {
    newKusorep(input: $input) {
      kusorep {
        id
        content
      }
    }
  }
`

const RoomMemberPage = () => {
  const history = useHistory();
  const { id: roomId, memberId } = useParams<ParamTypes>()
  const [kusorep, setKusprep] = useState('')
  const { data } = useQuery(FETCH_ROOM_MEMBERS, {
    variables: {
      id: roomId
    },
  });
  const [newKusorep] = useMutation(NEW_KUSOREP);

  return (
    <>
      <div>
        <h1>クソリプを考えよう</h1>
        <p>お題に対してクソリプを入力してください</p>
      </div>
      <table className="table">
        <thead>
          <tr><th>このルームにいるのは？</th></tr>
        </thead>
        <tbody>
          {data && data.room.members.map((member: any) => (
            <tr key={member.id}><td>{member.name}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="theme-box">
        <p>{data && data.room.theme}</p>
      </div>
      <form className="form-panel">
        <div className="form-group">
          <textarea
            cols={90}
            rows={10}
            placeholder="クソリプおじさんになりきってクソリプを書こう！"
            className="form-text"
            onChange={(e) => setKusprep(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-blue btn-lg"
          type="button"
          onClick={() => {
            newKusorep({variables: {
              input: {
                content: kusorep,
                memberId: memberId,
              }
            }})
            history.push(`/rooms/${roomId}/kusoreps`)
          }}
        >
          クソリプする
        </button>
      </form>
    </>
  )
}

export default RoomMemberPage;
