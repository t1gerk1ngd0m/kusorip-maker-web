import './App.css';
import { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';

type NewMemberInput = {
  name: String
  roomId: String
}

const NEW_MEMBER = gql`
  mutation NewMember($input: NewMemberInput!) {
    newMember(input: $input) {
      member {
        id
        name
      }
    }
  }
`

const NewMemberPage = () => {
  const [memberName, setMemberName] = useState('')
  const [newMember, { loading, error, data }] = useMutation(NEW_MEMBER);

  useEffect(() => {
    if (!loading && data) history.push(`/rooms/${data.newRoom.room.id}`)
  })

  return (
    <>
      <div>
        <h1>メンバー登録</h1>
        <p>名前を入力してルームに入室してください</p>
      </div>
      <form className="form-panel">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="あなたの名前"
            onChange={(e) => setMemberName(e.target.value)}
          />
        </div>
        <button
          className="btn btn-blue btn-lg"
          type="submit"
          onClick={() => {
            newMember({variables: {
              input: { name: memberName }
            }})
          }}
        >
          ルームに入室する
        </button>
      </form>
    </>
  )
}

export default NewMemberPage;
