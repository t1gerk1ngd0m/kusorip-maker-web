import './App.css';
import { useState, useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

type NewMemberInput = {
  name: String
  roomId: String
}

type ParamTypes = {
  id: string
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
  const history = useHistory();
  const [memberName, setMemberName] = useState('')
  const [newMember, { data }] = useMutation(NEW_MEMBER);
  const url = window.location.href
  const { id } = useParams<ParamTypes>()

  useEffect(() => {
    if (data?.newMember?.member?.id) history.push(`/rooms/${id}/members/${data.newMember.member.id}`)
  }, [data])

  return (
    <>
      <div>
        <h1>メンバー登録</h1>
        <p>名前を入力してルームに入室してください</p>
        <p>招待する場合はこのページのURLをコピーしてください</p>
        <CopyToClipboard
          text={url}
          onCopy={() => alert(`クリップボードにurlをコピーしました！\n${url}`)}
        >
          <button
            className="btn btn-blue"
          >
            URLをコピー
          </button>
        </CopyToClipboard>
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
          type="button"
          onClick={() => {
            newMember({variables: {
              input: {
                name: memberName,
                roomId: id,
              }
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
