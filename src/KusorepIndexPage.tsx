import { useEffect } from 'react';
import kusorepMan from './images/kusorep_man.png'
import './App.css';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

type ParamTypes = {
  id: string
}

const KUSOREP_INDEX = gql`
  query Room($id: ID!) {
    room(id: $id) {
      theme
      kusoreps {
        id
        content
        memberName
      }
    }
  }
`
const KusorepIndexPage = () => {
  const { id: roomId } = useParams<ParamTypes>()
  const { data } = useQuery(KUSOREP_INDEX, {
    variables: {
      id: roomId
    },
    pollInterval: 1000,
  });

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
          </tr>
        </thead>
        <tbody>
          {data && data.room.kusoreps.map((kusorep: any) => (
            <tr key={kusorep.id}>
              <td>{kusorep.memberName}</td>
              <td>{kusorep.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default KusorepIndexPage
