import { useState } from 'react';
import './App.css';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

type ParamTypes = {
  id: string
}

type VoteKusorepInput = {
  id: String
  isVote: Boolean
}

const KUSOREP_INDEX = gql`
  query Room($id: ID!) {
    room(id: $id) {
      theme
      kusoreps {
        id
        content
        memberName
        voteNumber
      }
    }
  }
`

const VOTE_KUSOREP = gql`
  mutation VoteKusorep($input: VoteKusorepInput!) {
    voteKusorep(input: $input) {
      kusorep {
        id
        content
      }
    }
  }
`

const KusorepIndexPage = () => {
  const [isVoted, setIsVoted] = useState(false)
  const { id: roomId } = useParams<ParamTypes>()
  const { data } = useQuery(KUSOREP_INDEX, {
    variables: {
      id: roomId
    },
    pollInterval: 5000,
  });
  const [voteKusorep, { loading, error, data: mutationData }] = useMutation(VOTE_KUSOREP);

  return (
    <>
      <div>
        <h1>クソリプに投票してください</h1>
        <p>一番いいと思うクソリプに「クソ」をつけてください</p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>投稿者</th>
            <th>クソリプ</th>
            <th>投票数</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data && data.room.kusoreps.map((kusorep: any) => (
            <tr key={kusorep.id}>
              <td>{kusorep.memberName}</td>
              <td>{kusorep.content}</td>
              <td>{kusorep.voteNumber}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    setIsVoted(true)
                    voteKusorep({variables: {
                      input: {
                        id: kusorep.id,
                        isVote: true,
                      }
                    }})
                  }}
                  disabled={isVoted}
                >
                  クソ!!!
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default KusorepIndexPage
