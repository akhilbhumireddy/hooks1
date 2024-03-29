// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ImageContainer,
  Paragraph,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [name, setName] = useState({
    name: 'Your Device is Locked',
  })
  const [imageUrl, setImageUrl] = useState({
    imageUrl: 'https://assets.ccbp.in/frontend/hooks/lock-img.png',
  })

  const onClickButton = () => {
    setName({name: 'Your Device is Unlocked'})
    setImageUrl({
      imageUrl: 'https://assets.ccbp.in/frontend/hooks/unlock-img.png',
    })
  }
  return (
    <MainContainer>
      <ImageContainer src={imageUrl} />
      <Paragraph>{name}</Paragraph>
      <Button onClick={onClickButton}>Unlock</Button>
    </MainContainer>
  )
}
export default Unlock
