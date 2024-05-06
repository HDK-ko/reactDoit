import {FC} from 'react'
import * as D from '../data'
import {Avatar, Div, DivProps} from '../components'

export type UserProps = DivProps & {
  user: D.IUser
}

const User: FC<UserProps> = ({user, ...props}) => {
  const {name, email, jobTitle, avatar} = user
  return (
    <Div {...props}>
      <div className="flex p-2">
        <Avatar src={avatar} size="2rem" />
        <div className="ml-2">
          <p className="font-bold">{name}</p>
        </div>
      </div>
    </Div>
  )
}

export default User
